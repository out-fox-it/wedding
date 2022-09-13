export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export const isKnownEnvironment = (value: string): value is Environment =>
  Object.values<string>(Environment).includes(value)
