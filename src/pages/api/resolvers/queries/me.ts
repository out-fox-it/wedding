import type { QueryResolvers } from '../resolvers.generated'
import { toGqlUser } from '../types/user'

export const me: QueryResolvers['me'] = async (_, __, { prisma, session }) => {
  const userId = session.user?.id

  if (!userId) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { profile: true },
  })

  if (!user) {
    return null
  }

  return toGqlUser(user)
}
