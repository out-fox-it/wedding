import type { MutationResolvers } from '../resolvers.generated'

export const logout: MutationResolvers['logout'] = (_, __, { session }) => {
  session.destroy()
  return null
}
