import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { getCurrentLocale, getStaticParams } from '~/locales/server'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
