import { promises as fs } from 'fs'

export async function saveDataToJsonFile<T extends unknown>(
	path: string,
	data: T
): Promise<void> {
	await fs.writeFile(path, JSON.stringify(data, null, '\t'), 'utf8')
}
