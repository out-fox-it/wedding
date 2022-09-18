import type { QueryResolvers } from '../resolvers.generated'

export const me: QueryResolvers['me'] = async (_, __, { prisma, session }) => {
  const userId = session.user?.id

  if (!userId) {
    return null
  }

  return await prisma.user.findUnique({
    where: { id: userId },
  })
}
