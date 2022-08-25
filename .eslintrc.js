'use strict'

/** @type {import("eslint").Linter.Config} */
module.exports = {
  reportUnusedDisableDirectives: true,
  extends: ['eslint:recommended', 'next/core-web-vitals'],
  overrides: [
    {
      files: ['**/*.ts'],
      excludedFiles: [
        'next-env.d.ts',
        '**/styled.ts',
        'theme/*.ts',
        'assets/*.tsx',
      ],
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
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'react/require-default-props': [0],
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
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'react/require-default-props': [0],
      },
    },
    {
      files: ['scripts/**/*.ts'],
      env: { node: true, browser: false },
      extends: [
        'eslint:recommended',
        '@strv/node/v16',
        '@strv/node/optional',
        '@strv/typescript',
        '@strv/typescript/optional',
      ],
      parserOptions: {
        project: 'scripts/tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'import/no-unused-modules': ['warn', { unusedExports: true }],
        'no-console': ['warn', { allow: ['info', 'error', 'table'] }],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { ignoreRestSiblings: true },
        ],
      },
    },
  ],
}
