import type { QueryResolvers } from '../resolvers.generated'
import { me } from './me'

const wait = async (ms: number): Promise<void> =>
  await new Promise((resolve) => setTimeout(resolve, ms))

export const Query: QueryResolvers = {
  me,
  hello: async (_, { name }) => {
    await wait(1500)
    return `Hello ${name}!`
  },
}
