import type { Environment } from './environment'
import { environment } from './environment'
import { ensureDefinitionOf } from './utils'

export { authentication } from './authentication'

interface Config {
  environment: Environment
  apiUrl: string
  ssrMode: boolean
}

const config: Config = {
  environment,
  apiUrl: ensureDefinitionOf(
    'NEXT_PUBLIC_API_URL',
    process.env.NEXT_PUBLIC_API_URL,
  ),
  ssrMode: typeof window === 'undefined',
}

export default config
