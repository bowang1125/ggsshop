import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // 使用更寬鬆的CSP設置
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https:;"
  );

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
