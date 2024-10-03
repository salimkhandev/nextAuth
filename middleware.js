import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/', request.url))
    }
}