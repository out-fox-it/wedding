'use strict'

module.exports = {
  extends: [
    '@strv/stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],

  parserOptions: {
    project: './tsconfig.json',
  },
}
