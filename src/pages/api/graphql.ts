import { createServer } from '@graphql-yoga/node'
import type { NextApiRequest, NextApiResponse } from 'next'
import { useGenericAuth as genericAuth } from '@envelop/generic-auth'

import config from '~/config'
import { Environment } from '~/config/environment'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import type { GraphQLContext } from './resolvers/context'
import { createContext } from './resolvers/context'
import { resolveUserFn } from './resolvers/authorization'

// eslint-disable-next-line import/no-unused-modules
export default createServer<
  {
    req: NextApiRequest
    res: NextApiResponse
  },
  GraphQLContext
>({
  schema: {
    typeDefs,
    resolvers,
  },
  context: async ({ req, res }) => await createContext(req, res),
  graphiql: config.environment === Environment.Development,
  maskedErrors: config.environment === Environment.Production,
  plugins: [
    genericAuth({
      resolveUserFn,
      mode: 'protect-granular',
    }),
  ],
})