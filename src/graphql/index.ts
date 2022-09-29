import { ApolloClient, InMemoryCache } from '@apollo/client'

import config from '~/config'

export * from './operations.generated'

export const client = new ApolloClient({
  uri: config.apiUrl,
  ssrMode: config.ssrMode,
  cache: new InMemoryCache(),
})
