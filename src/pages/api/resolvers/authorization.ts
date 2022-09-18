import type { ResolveUserFn } from '@envelop/generic-auth'
import type { IronSessionData } from 'iron-session'

import type { GraphQLContext } from './context'

export const resolveUserFn: ResolveUserFn<
  Required<IronSessionData>['user'],
  GraphQLContext
> = ({ session }) => (!session.user ? null : { id: session.user.id })
