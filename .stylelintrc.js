'use strict'

/** @type {import("stylelint").Config} */
module.exports = {
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  extends: [
    '@strv/stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignoreFiles: ['**/*.gif', '**/*.gql', '**/*.graphql'],
  rules: {
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }],
    'no-descending-specificity': null,
  },
}
