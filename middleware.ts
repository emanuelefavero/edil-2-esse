import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const formSubmitted = request.cookies.get('formSubmitted') // get cookie

  // Redirect to the homepage if the user lands on a success page
  if (request.nextUrl.pathname.startsWith('/success')) {
    if (!formSubmitted) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Delete the cookie after the user has seen the success page
    request.cookies.delete('formSubmitted')
  }
}

export const config = {
  // Only run this middleware on these paths
  matcher: ['/success'],
}
