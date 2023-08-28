import { createI18nClient } from 'next-international/client'

import { locales } from '~/locales/index'

// eslint-disable-next-line import/no-unused-modules
export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
} = createI18nClient(locales)
