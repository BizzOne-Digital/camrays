import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isLoginPage = req.nextUrl.pathname === '/admin/login';

  if (req.nextUrl.pathname.startsWith('/admin') && !isLoginPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', req.nextUrl));
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl));
  }
});

export const config = {
  matcher: ['/admin/:path*'],
};
