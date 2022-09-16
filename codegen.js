'use strict'

/** @type {import("@graphql-codegen/cli").CodegenConfig} */
module.exports = {
  schema: './src/pages/api/schema/*.ts',
  generates: {
    './src/pages/api/resolvers/resolvers.generated.d.ts': {
      plugins: [
        {
          add: {
            content: '/* eslint-disable @typescript-eslint/no-explicit-any */',
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
      config: {
        useIndexSignature: true,
        contextType: './context#GraphQLContext',
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write', 'eslint --fix'] },
}
