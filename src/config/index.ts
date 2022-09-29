import type { Environment } from './environment'
import { environment } from './environment'

export { authentication } from './authentication'

interface Config {
  environment: Environment
}

const config: Config = { environment }

export default config
