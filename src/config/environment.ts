import { getEnvironmentValue } from './utils'

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Client = 'client',
}

const currentEnvironment = getEnvironmentValue('NODE_ENV', Environment.Client)

const isKnownEnvironment = (value: string): value is Environment =>
  Object.values<string>(Environment).includes(value)

if (!isKnownEnvironment(currentEnvironment)) {
  throw new Error(`Unknown environment: ${currentEnvironment}`)
}

export const environment = currentEnvironment
