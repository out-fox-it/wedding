import type { Environment } from './environment'
import { isKnownEnvironment } from './environment'

interface Config {
  environment: Environment

  authentication: {
    saltRounds: number
  }
}

const getEnvironmentValue = (name: string, defaultValue?: string): string => {
  const environmentValue = process.env[name] ?? defaultValue

  if (!environmentValue) {
    throw new Error(`Environment variable "${name}" is not defined`)
  }

  return environmentValue
}

const environment = getEnvironmentValue('NODE_ENV')

if (!isKnownEnvironment(environment)) {
  throw new Error(`Unknown environment: ${environment}`)
}

const defaultSaltRounds = 10
const saltRounds = Number(
  getEnvironmentValue('SALT_ROUNDS', defaultSaltRounds.toString()),
)

const config: Config = {
  environment,

  authentication: {
    saltRounds: isNaN(saltRounds) ? defaultSaltRounds : saltRounds,
  },
}

export default config
