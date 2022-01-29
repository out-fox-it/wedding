import { promises as fs } from 'fs'

export async function saveDataToJsonFile<T extends unknown>(
	path: string,
	data: T
): Promise<void> {
	await fs.writeFile(path, JSON.stringify(data, null, '\t'), 'utf8')
}

export async function readDataFromJsonFile(path: string): Promise<unknown> {
	return JSON.parse(await fs.readFile(path, 'utf8'))
}

export function listFilesInDirectory(directoryPath: string): Promise<string[]> {
	return fs.readdir(directoryPath)
}
