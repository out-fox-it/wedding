import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface GraphQLContext {
  prisma: PrismaClient
}

export function createContext(): GraphQLContext {
  return { prisma }
}
