import { PrismaClient } from '@prisma/client'
import type { IronSession, IronSessionOptions } from 'iron-session'
import { getIronSession } from 'iron-session'
import type { NextApiRequest, NextApiResponse } from 'next'

import config from '~/config'
import { Environment } from '~/config/environment'

const prisma = new PrismaClient()

export interface GraphQLContext {
  prisma: PrismaClient
  session: IronSession
}

const sessionOptions: IronSessionOptions = {
  cookieName: config.authentication.cookieName,
  password: config.authentication.cookiePassword,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: config.environment === Environment.Production,
  },
}

export async function createContext(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<GraphQLContext> {
  return {
    prisma,
    session: await getIronSession(req, res, sessionOptions),
  }
}
