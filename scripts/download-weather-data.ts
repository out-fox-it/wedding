import path from 'path'
import { JSDOM } from 'jsdom'
import fetch from 'node-fetch' // eslint-disable-line @typescript-eslint/no-shadow
import { saveDataToJsonFile } from './file-utils'

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

async function main(): Promise<void> {
  const currentYear = new Date().getFullYear()
  const nextYear = currentYear + 1
  const previousYear = currentYear - 1

  const scriptArguments = process.argv.slice(2)
  const argumentsYear = Number(scriptArguments[0])

  const pastYear =
    isNaN(argumentsYear) || argumentsYear >= currentYear
      ? previousYear
      : argumentsYear

  console.info(
    `Downloading weather data for Saturdays of year ${nextYear} for year ${pastYear}...`,
  )

  const nextYearSaturdays = getDaysOfWeekBetweenDates(
    DayOfWeek.Saturday,
    new Date(`${nextYear}-01-01`),
    new Date(`${nextYear}-12-31`),
  )

  const pastDates = nextYearSaturdays.map((date) =>
    getDateInPastYear(date, pastYear),
  )

  try {
    const data = await Promise.all(
      pastDates.map(async (date) => ({
        date,
        stations: await getWeatherStationsDataForDate(date),
      })),
    )

    await saveDataToJsonFile(
      path.join(__dirname, `/data/download/${pastYear}.json`),
      data,
    )
  } catch (error) {
    console.error(error)
  }
}

const cloneDate = (date: Date): Date => new Date(date.valueOf())

function getDaysOfWeekBetweenDates(
  day: DayOfWeek,
  start: Date,
  end: Date,
): Date[] {
  const startDate = cloneDate(start)
  // Shift to next of required days
  startDate.setUTCDate(
    startDate.getUTCDate() + ((day - startDate.getUTCDay() + 7) % 7),
  )

  const go = (dates: Date[], currentDate: Date): Date[] =>
    currentDate <= end
      ? go([...dates, currentDate], getNextWeekDate(currentDate))
      : dates

  return go([], startDate)
}

function getNextWeekDate(date: Date): Date {
  const nextWeekDate = cloneDate(date)
  nextWeekDate.setUTCDate(date.getUTCDate() + 7)
  return nextWeekDate
}

function getDateInPastYear(date: Date, pastYear: number): Date {
  const currentYear = date.getFullYear()
  const years = currentYear - pastYear
  const dateInPastYear = cloneDate(date)
  dateInPastYear.setFullYear(currentYear - years)
  return dateInPastYear
}

const weatherPageUrl = (date: Date, region: number): string =>
  `https://www.in-pocasi.cz/archiv/archiv.php?historie=${
    date.toISOString().split('T')[0]
  }&region=${region}`

async function getWeatherStationsDataForDate(
  date: Date,
  region = 4, // Královéhradecký
): Promise<string[][]> {
  const htmlContent = await fetch(weatherPageUrl(date, region)).then(
    async (response) => await response.text(),
  )

  const { document } = new JSDOM(htmlContent).window
  const tables = document.getElementsByClassName('table-data')

  // Public weather stations table
  const firstTable = tables[0]
  const rows = firstTable?.getElementsByTagName('tr') ?? []

  return Array.from(rows)
    .slice(1)
    .map((row) => {
      const values = row.getElementsByTagName('td')
      return Array.from(values).map((value) => value.textContent ?? '')
    })
}

main().catch((error) => console.error(error))
