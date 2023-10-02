import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Oxygen } from 'next/font/google'

import { getCurrentLocale, getStaticParams } from '~/locales/server'

import './globals.css'

const oxygen = Oxygen({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'WeddinG',
}

export function generateStaticParams() {
  return getStaticParams()
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = getCurrentLocale()

  return (
    <html lang={locale}>
      <body className={`${oxygen.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
