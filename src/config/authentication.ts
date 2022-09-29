import { getEnvironmentValue } from './utils'

const defaultSaltRounds = 10

const saltRounds = Number(
  getEnvironmentValue('SALT_ROUNDS', defaultSaltRounds.toString()),
)

export const authentication = {
  saltRounds: isNaN(saltRounds) ? defaultSaltRounds : saltRounds,
  cookieName: getEnvironmentValue('COOKIE_NAME', 'wedding-iron-session'),
  cookiePassword: getEnvironmentValue(
    'COOKIE_PASSWORD',
    '%Rrx9jAXx9^bv!RG^@AMxa#$tJa!2h^!(2MQ*@jq%Ic!7Jt&6FmM@eaNAhnpdtMq',
  ),
}
