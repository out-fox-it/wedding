'use strict'

/** @type {import('prettier').Config} */
module.exports = {
  ...require('@strv/prettier-config'),
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
}
