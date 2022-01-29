import { map } from 'fp-ts/Array'
import { isLeft, isRight } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { head, NonEmptyArray, tail } from 'fp-ts/NonEmptyArray'
import { getOrElseW, none, Option, some } from 'fp-ts/Option'
import { array, string, type, TypeOf } from 'io-ts'
import { DateFromISOString, nonEmptyArray, NumberFromString } from 'io-ts-types'
import { PathReporter } from 'io-ts/PathReporter'
import path from 'path'
import {
	listFilesInDirectory,
	readDataFromJsonFile,
	saveDataToJsonFile,
} from './file-utils'

async function main(): Promise<void> {
	const downloadDirectory = path.join(__dirname, '/data/download/')
	const processedDirectory = path.join(__dirname, '/data/processed/')

	try {
		const files = await listFilesInDirectory(downloadDirectory)

		const processWeatherDataFile = processWeatherData(
			downloadDirectory,
			processedDirectory
		)

		await Promise.all(files.map((file) => processWeatherDataFile(file)))
	} catch (error) {
		console.error(error)
	}
}

function processWeatherData(
	inputDirectory: string,
	outputDirectory: string
): (file: string) => Promise<void> {
	return async (file: string) => {
		console.info(`Processing ${file}...`)
		const data = await readDataFromJsonFile(path.join(inputDirectory, file))
		const weatherData = await parseWeatherData(data)
		await saveDataToJsonFile(path.join(outputDirectory, file), weatherData)
	}
}

const WeatherRecords = type({
	date: DateFromISOString,
	stations: nonEmptyArray(nonEmptyArray(string)),
})

type WeatherRecords = TypeOf<typeof WeatherRecords>

type WeatherData = {
	date: Date
	stations: WeatherStation[]
}

function parseWeatherData(data: unknown): Promise<WeatherData[]> {
	return new Promise((resolve, reject) => {
		const result = array(WeatherRecords).decode(data)
		if (isRight(result))
			return resolve(
				result.right.map(({ date, stations }) => ({
					date: date,
					stations: stations.map(toWeatherStation),
				}))
			)
		reject(PathReporter.report(result))
	})
}

type WeatherStation = {
	name: string
	maxTemperature?: NumberWithUnit
	minTemperature?: NumberWithUnit
	wind?: NumberWithUnit
	rain?: NumberWithUnit
	snow?: NumberWithUnit
	sunshine?: NumberWithUnit
}

function toWeatherStation(
	weatherValues: NonEmptyArray<string>
): WeatherStation {
	const name = head(weatherValues).trim()

	const numbersWithUnit = pipe(
		tail(weatherValues),
		map(toNumberWithUnit),
		map(getOrElseW(() => undefined))
	)
	const [maxTemperature, minTemperature, wind, rain, snow, sunshine] =
		numbersWithUnit

	return {
		name,
		maxTemperature,
		minTemperature,
		wind,
		rain,
		snow,
		sunshine,
	}
}

type NumberWithUnit = {
	value: number
	unit: string
}

const toNumberWithUnit = (value: string): Option<NumberWithUnit> => {
	const [valueString, ...unit] = value.split(' ')

	const valueNumber = NumberFromString.decode(valueString.trim())
	if (isLeft(valueNumber)) return none

	return some({
		value: valueNumber.right,
		unit: unit.join(' ').trim(),
	})
}

main()
