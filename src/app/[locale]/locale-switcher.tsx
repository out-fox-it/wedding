'use client'

import { type Locale } from '~/locales'
import { useChangeLocale } from '~/locales/client'

const locales: Array<[Locale, string]> = [
  ['en', '🇬🇧'],
  ['cs', '🇨🇿'],
]

export default function LocaleSwitcher() {
  const changeLocale = useChangeLocale()

  return (
    <ul className="flex gap-4 text-5xl">
      {locales.map(([locale, flag]) => (
        <li key={locale}>
          <button type="button" onClick={() => changeLocale(locale)}>
            {flag}
          </button>
        </li>
      ))}
    </ul>
  )
}
