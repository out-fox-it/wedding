import type { Environment } from './environment'
import { isKnownEnvironment } from './environment'

interface Config {
  environment: Environment
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

const config: Config = {
  environment,
}

export default config
