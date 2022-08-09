'use strict'

/** @type {import("eslint").Linter.Config} */
module.exports = {
  reportUnusedDisableDirectives: true,
  extends: ['eslint:recommended', 'next/core-web-vitals'],
  overrides: [
    {
      files: ['**/*.ts'],
      excludedFiles: ['next-env.d.ts'],
      extends: [
        'eslint:recommended',
        'next/core-web-vitals',
        '@strv/node/v16',
        '@strv/node/optional',
        '@strv/typescript',
        '@strv/typescript/optional',
      ],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    {
      files: ['**/*.tsx'],
      extends: [
        'eslint:recommended',
        'next/core-web-vitals',
        '@strv/react',
        '@strv/react/optional',
        '@strv/typescript',
        '@strv/typescript/optional',
        '@strv/typescript/react',
      ],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
}
