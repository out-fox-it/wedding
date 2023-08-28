import { type NextRequest } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'

import { defaultLocale, supportedLocales } from '~/locales'

const I18nMiddleware = createI18nMiddleware(supportedLocales, defaultLocale)

// eslint-disable-next-line import/no-unused-modules
export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

// eslint-disable-next-line import/no-unused-modules
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
