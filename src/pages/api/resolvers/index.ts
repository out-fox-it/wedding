import type { Resolvers } from './resolvers.generated'

export const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello WeddinG!',
  },
}
