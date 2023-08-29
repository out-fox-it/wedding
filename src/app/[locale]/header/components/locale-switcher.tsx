'use client'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { type Locale } from '~/locales'
import { useCurrentLocale, useChangeLocale } from '~/locales/client'

const locales: Array<[Locale, string]> = [
  ['en', '🇬🇧'],
  ['cs', '🇨🇿'],
]

export default function LocaleSwitcher({ className }: { className?: string }) {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  return (
    <ul className={twMerge('flex gap-4', className)}>
      {locales.map(([locale, flag]) => (
        <li key={locale}>
          <button
            type="button"
            className={clsx(
              'btn btn-square btn-ghost text-3xl',
              locale === currentLocale && 'btn-outline border-2',
            )}
            onClick={() => changeLocale(locale)}
          >
            {flag}
          </button>
        </li>
      ))}
    </ul>
  )
}
