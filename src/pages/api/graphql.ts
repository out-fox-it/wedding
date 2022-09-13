import { createServer } from '@graphql-yoga/node'
import type { NextApiRequest, NextApiResponse } from 'next'

import config from '~/config'
import { Environment } from '~/config/environment'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'

// eslint-disable-next-line import/no-unused-modules
export default createServer<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: {
    typeDefs,
    resolvers,
  },
  graphiql: config.environment === Environment.Development,
  maskedErrors: config.environment === Environment.Production,
})
