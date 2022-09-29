import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  EmailAddress: string
  Password: string
  UUID: string
  Void: null
}

export interface Mutation {
  __typename?: 'Mutation'
  login: User
  logout?: Maybe<Scalars['Void']>
  register: User
}

export interface MutationLoginArgs {
  email: Scalars['EmailAddress']
  password: Scalars['Password']
}

export interface MutationRegisterArgs {
  user: UserInput
}

export interface Query {
  __typename?: 'Query'
  hello: Scalars['String']
  me?: Maybe<User>
}

export interface QueryHelloArgs {
  name: Scalars['String']
}

export interface User {
  __typename?: 'User'
  email: Scalars['EmailAddress']
  id: Scalars['UUID']
}

export interface UserInput {
  code: Scalars['String']
  email: Scalars['EmailAddress']
  password: Scalars['Password']
}

export type HelloQueryVariables = Exact<{
  name: Scalars['String']
}>

export interface HelloQuery {
  __typename?: 'Query'
  hello: string
}

export const Hello = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Hello' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hello' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HelloQuery, HelloQueryVariables>
