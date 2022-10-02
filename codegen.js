'use strict'

const scalars = {
  UUID: 'string',
  EmailAddress: 'string',
  Password: 'string',
  Void: 'null',
  NonEmptyString: 'string',
}

/** @type {import("@graphql-codegen/cli").CodegenConfig} */
module.exports = {
  schema: './src/pages/api/schema/*.ts',
  generates: {
    './src/graphql/operations.generated.ts': {
      documents: ['src/graphql/**/*.{gql,graphql}'],
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        documentVariableSuffix: '',
        enumsAsTypes: true,
        scalars,
      },
    },
    './src/pages/api/resolvers/resolvers.generated.d.ts': {
      plugins: [
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-explicit-any */',
          },
        },
        {
          add: {
            content:
              '/* eslint-disable @typescript-eslint/no-empty-interface */',
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
      config: {
        useIndexSignature: true,
        enumsAsTypes: true,
        contextType: './context#GraphQLContext',
        fieldContextTypes: [
          'Mutation.updateProfile#./authorization#UserGraphQLContext',
        ],
        scalars,
      },
    },
  },
  hooks: {
    afterOneFileWrite: [
      'eslint --fix --fix-type problem,suggestion,layout',
      'prettier --write',
    ],
  },
}
