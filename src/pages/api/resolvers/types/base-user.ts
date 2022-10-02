import type { BaseUserResolvers } from '../resolvers.generated'

export const BaseUser: BaseUserResolvers = {
  __resolveType: (user) => (user.complete ? 'CompleteUser' : 'PendingUser'),
}
