import type { Environment } from './environment'
import { environment } from './environment'
import { ensureDefinitionOf, getNumericEnvironmentValue } from './utils'

export { authentication } from './authentication'

interface Config {
  environment: Environment
  apiUrl: string
  ssrMode: boolean
  maxNumberOfSongs: number
}

const defaultMaxNumberOfSongs = 10

const config: Config = {
  environment,
  apiUrl: ensureDefinitionOf(
    'NEXT_PUBLIC_API_URL',
    process.env.NEXT_PUBLIC_API_URL,
  ),
  ssrMode: typeof window === 'undefined',
  maxNumberOfSongs: getNumericEnvironmentValue(
    'MAX_NUMBER_OF_SONGS',
    defaultMaxNumberOfSongs,
  ),
}

export default config
