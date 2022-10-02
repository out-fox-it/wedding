import type { Profile, User as PrismaUser } from '@prisma/client'

import type {
  CompleteUser,
  PendingUser,
  User as GqlUser,
  UserResolvers,
} from '../resolvers.generated'

export const User: UserResolvers = {
  __resolveType: (user) => (user.complete ? 'CompleteUser' : 'PendingUser'),
}

type DatabaseUser = PrismaUser & {
  profile?: Profile | null
}

export const toGqlPendingUser = (user: PrismaUser): PendingUser => ({
  ...user,
  complete: false,
})

export const toGqlCompleteUser = (
  user: PrismaUser,
  { parking, playlist, notes }: Profile,
): CompleteUser => ({
  ...user,
  complete: true,
  parking,
  playlist,
  notes,
})

export const toGqlUser = ({ profile, ...user }: DatabaseUser): GqlUser =>
  profile ? toGqlCompleteUser(user, profile) : toGqlPendingUser(user)
