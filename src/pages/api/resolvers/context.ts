// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GraphQLContext {}

export async function createContext(): Promise<GraphQLContext> {
  return await Promise.resolve({})
}
