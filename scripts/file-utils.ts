import { promises as fs } from 'fs'

export async function saveDataToJsonFile<T>(
  path: string,
  data: T,
): Promise<void> {
  await fs.writeFile(path, JSON.stringify(data, null, '\t'), 'utf8')
}

export async function readDataFromJsonFile(path: string): Promise<unknown> {
  return JSON.parse(await fs.readFile(path, 'utf8')) as unknown
}

export async function listFilesInDirectory(
  directoryPath: string,
): Promise<string[]> {
  return await fs.readdir(directoryPath)
}
