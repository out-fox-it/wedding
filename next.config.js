'use strict'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ['src', 'scripts'],
  },
  i18n: {
    locales: ['en', 'cs'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}
