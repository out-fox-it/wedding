'use strict'

/** @type {import("@graphql-codegen/cli").CodegenConfig} */
module.exports = {
  schema: './src/pages/api/schema/*.ts',
  generates: {
    './src/graphql/': {
      documents: ['src/api/**/*.ts'],
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      hooks: {
        afterOneFileWrite: ['eslint --fix', 'prettier --write'],
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
        contextType: './context#GraphQLContext',
        scalars: {
          UUID: 'string',
          EmailAddress: 'string',
          Password: 'string',
          Void: 'null',
        },
      },
      hooks: {
        afterOneFileWrite: [
          'eslint --fix --fix-type problem,suggestion,layout',
          'prettier --write',
        ],
      },
    },
  },
}
