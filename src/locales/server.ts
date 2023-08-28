import { createI18nServer } from 'next-international/server'

import { locales } from '~/locales/index'

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
  createI18nServer(locales)
