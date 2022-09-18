import type { QueryResolvers } from '../resolvers.generated'
import { me } from './me'

export const Query: QueryResolvers = {
  me,
}
