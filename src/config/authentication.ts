import { getEnvironmentValue, getNumericEnvironmentValue } from './utils'

const defaultSaltRounds = 10

export const authentication = {
  saltRounds: getNumericEnvironmentValue('SALT_ROUNDS', defaultSaltRounds),
  cookieName: getEnvironmentValue('COOKIE_NAME', 'wedding-iron-session'),
  cookiePassword: getEnvironmentValue(
    'COOKIE_PASSWORD',
    '%Rrx9jAXx9^bv!RG^@AMxa#$tJa!2h^!(2MQ*@jq%Ic!7Jt&6FmM@eaNAhnpdtMq',
  ),
}
