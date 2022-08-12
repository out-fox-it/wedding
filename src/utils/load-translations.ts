export async function loadTranslations(locale: string): Promise<IntlMessages> {
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  const translations = (await import(`../../translations/${locale}.json`)) as {
    default: IntlMessages
  }
  return translations.default
}
