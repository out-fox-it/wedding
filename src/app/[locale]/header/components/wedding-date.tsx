import { getCurrentLocale } from '~/locales/server'

const weddingDate = new Date('2023-07-22') // 22nd July 2023

export default function WeddingDate({ className }: { className?: string }) {
  const currentLocale = getCurrentLocale()
  const formattedWeddingDate = new Intl.DateTimeFormat(
    currentLocale === 'en' ? 'en-GB' : currentLocale,
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  ).format(weddingDate)

  return <p className={className}>{formattedWeddingDate}</p>
}
