import { filter, filterMap, flatten, isEmpty, map, sort } from 'fp-ts/Array'
import { isRight } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { groupBy } from 'fp-ts/NonEmptyArray'
import { Ord as NumberOrd } from 'fp-ts/number'
import type { Option } from 'fp-ts/Option'
import {
  getOrElse,
  isNone,
  map as mapOption,
  match,
  none,
  some,
} from 'fp-ts/Option'
import { fromCompare } from 'fp-ts/Ord'
import {
  collect as collectWith,
  filterMap as filterMapRecord,
  getMonoid as getRecordMonoid,
  map as mapRecord,
} from 'fp-ts/Record'
import { Ord as StringOrd } from 'fp-ts/string'
import type { TypeOf } from 'io-ts'
import { array, number, string, type } from 'io-ts'
import {
  DateFromISOString,
  nonEmptyArray,
  optionFromNullable,
} from 'io-ts-types'
import { PathReporter } from 'io-ts/PathReporter'
import path from 'path'
import { listFilesInDirectory, readDataFromJsonFile } from './file-utils'

const collect = collectWith(StringOrd)

async function main(): Promise<void> {
  try {
    const weatherData = await loadWeatherData()
    analyzeWeatherData(weatherData)
  } catch (error) {
    console.error(error)
  }
}

async function loadWeatherData(): Promise<WeatherDataType[]> {
  const processedDirectory = path.join(__dirname, '/data/processed/')
  const files = await listFilesInDirectory(processedDirectory)

  return flatten(
    await Promise.all(
      files.map(async (file) => {
        console.info(`Loading ${file}...`)
        const data = await readDataFromJsonFile(
          path.join(processedDirectory, file),
        )
        return await validateWeatherData(data)
      }),
    ),
  )
}

const NumberWithUnit = type({
  value: number,
  unit: string,
})

type NumberWithUnitType = TypeOf<typeof NumberWithUnit>

function getNumber(numberWithUnit: Option<NumberWithUnitType>): number {
  return getOrElse(() => ({ value: 0, unit: '-' }))(numberWithUnit).value
}

function addNumbersWithUnits(
  numberWithUnit1: NumberWithUnitType,
  numberWithUnit2: NumberWithUnitType,
): Option<NumberWithUnitType> {
  if (numberWithUnit1.unit !== numberWithUnit2.unit) return none
  return some({
    value: numberWithUnit1.value + numberWithUnit2.value,
    unit: numberWithUnit1.unit,
  })
}

const numberWithUnitToString = match(
  () => '-',
  (numberWithUnit: NumberWithUnitType) =>
    `${numberWithUnit.value} ${numberWithUnit.unit}`,
)

const WeatherStation = type({
  name: string,
  maxTemperature: optionFromNullable(NumberWithUnit),
  minTemperature: optionFromNullable(NumberWithUnit),
  wind: optionFromNullable(NumberWithUnit),
  rain: optionFromNullable(NumberWithUnit),
  snow: optionFromNullable(NumberWithUnit),
  sunshine: optionFromNullable(NumberWithUnit),
})

type WeatherStationType = TypeOf<typeof WeatherStation>

type WeatherRecord = Omit<WeatherStationType, 'name'>

const WeatherData = type({
  date: DateFromISOString,
  stations: nonEmptyArray(WeatherStation),
})

type WeatherDataType = TypeOf<typeof WeatherData>

async function validateWeatherData(data: unknown): Promise<WeatherDataType[]> {
  return await new Promise((resolve, reject) => {
    const result = array(WeatherData).decode(data)
    if (isRight(result)) return void resolve(result.right)
    reject(PathReporter.report(result))
  })
}

function analyzeWeatherData(weatherData: WeatherDataType[]): void {
  const currentYear = new Date().getFullYear()
  const nextYear = currentYear + 1

  const toNextYearDate = (date: Date): string /* In format "YYYY-MM-DD */ =>
    `${nextYear}-${date.toISOString().slice(5, 10)}`

  // Prepare weather data for analysis
  const transformedWeatherData = pipe(
    weatherData,
    // Group data by dates in the next year
    groupBy(({ date }) => toNextYearDate(date)),
    // Union weather stations under grouped weather data & remove the internal date property
    mapRecord((weatherStationsData) =>
      weatherStationsData.flatMap(({ stations }) => stations),
    ),
    // Group weather stations by name & map them to weather records by removing the name property
    mapRecord((weatherStations) =>
      pipe(
        weatherStations,
        groupBy(({ name }) => name),
        collect((_, groupedWeatherStations) =>
          groupedWeatherStations.map(
            ({ name, ...weatherRecord }) => weatherRecord,
          ),
        ),
      ),
    ),
    // Union name grouped weather records by averaging their values
    mapRecord(filterMap(averageWeatherRecords)),
    // Average all weather records grouped under dates
    filterMapRecord(averageWeatherRecords),
    // Map dates back into weather records
    collect((date, weatherRecord) => ({
      date,
      ...weatherRecord,
    })),
  )

  const sortBy = (
    property: keyof WeatherRecord,
  ): (<T extends WeatherRecord>(weatherRecords: T[]) => T[]) =>
    sort(
      fromCompare<WeatherRecord>(
        ({ [property]: first }, { [property]: second }) =>
          NumberOrd.compare(getNumber(first), getNumber(second)),
      ),
    )

  const filterBy = (
    property: keyof WeatherRecord,
    filterValue: (value: number) => boolean,
  ): (<T extends WeatherRecord>(weatherRecords: T[]) => T[]) =>
    filter<WeatherRecord>(({ [property]: value }) =>
      filterValue(getNumber(value)),
    )

  // Play with the weather data to find the best date
  const analyzedWeatherData = pipe(
    transformedWeatherData,
    // Filter dates with any snowfall
    filterBy('snow', (snow) => snow <= 0),
    // Sort dates by the average rainfall
    sortBy('rain'),
    // Map the analyzed weather data to suitable output format
    map(({ date, ...weatherRecord }) => ({
      date,
      maxTemperature: numberWithUnitToString(weatherRecord.maxTemperature),
      minTemperature: numberWithUnitToString(weatherRecord.minTemperature),
      wind: numberWithUnitToString(weatherRecord.wind),
      rain: numberWithUnitToString(weatherRecord.rain),
      snow: numberWithUnitToString(weatherRecord.snow),
      sunshine: numberWithUnitToString(weatherRecord.sunshine),
    })),
  )

  console.table(analyzedWeatherData)
}

function averageWeatherRecords(
  weatherRecords: WeatherRecord[],
): Option<WeatherRecord> {
  if (isEmpty(weatherRecords)) return none

  const weatherRecordMonoid = getRecordMonoid<
    keyof WeatherRecord,
    Option<NumberWithUnitType>
  >({
    concat: (
      x: Option<NumberWithUnitType>,
      y: Option<NumberWithUnitType>,
    ): Option<NumberWithUnitType> => {
      if (isNone(x)) return y
      if (isNone(y)) return x
      return addNumbersWithUnits(x.value, y.value)
    },
  })
  const summedWeatherRecords = weatherRecords.reduce(weatherRecordMonoid.concat)

  return pipe(
    summedWeatherRecords,
    mapRecord(
      mapOption((numberWithUnit) => ({
        value: numberWithUnit.value / weatherRecords.length,
        unit: numberWithUnit.unit,
      })),
    ),
    some,
  )
}

main().catch((error) => console.error(error))
