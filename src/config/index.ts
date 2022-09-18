import type { Environment } from './environment'
import { isKnownEnvironment } from './environment'

interface Config {
  environment: Environment

  authentication: {
    saltRounds: number
    cookieName: string
    cookiePassword: string
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
    cookieName: getEnvironmentValue('COOKIE_NAME', 'wedding-iron-session'),
    cookiePassword: getEnvironmentValue(
      'COOKIE_PASSWORD',
      '%Rrx9jAXx9^bv!RG^@AMxa#$tJa!2h^!(2MQ*@jq%Ic!7Jt&6FmM@eaNAhnpdtMq',
    ),
  },
}

export default config
