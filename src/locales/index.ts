export const defaultLocale = 'en'
export const supportedLocales = [defaultLocale, 'cs'] as const

type Locale = (typeof supportedLocales)[number]
type Locales = Record<Locale, unknown>

export const locales = {
  /* eslint-disable node/no-unsupported-features/es-syntax, import/extensions */
  en: async () => await import('../../translations/en.json'),
  cs: async () => await import('../../translations/cs.json'),
  /* eslint-enable node/no-unsupported-features/es-syntax, import/extensions */
} satisfies Locales
