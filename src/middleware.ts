import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest): NextResponse {
  const response = NextResponse.next()

  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data:; " +
    "connect-src 'self'; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'"
  )

  // X-Frame-Options
  response.headers.set('X-Frame-Options', 'DENY')

  // X-Content-Type-Options
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Referrer-Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // X-DNS-Prefetch-Control
  response.headers.set('X-DNS-Prefetch-Control', 'off')

  // Strict-Transport-Security (HSTS)
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )

  // Permissions-Policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=()'
  )

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
