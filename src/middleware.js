import { NextResponse } from 'next/server';

// 這個中間件會捕獲所有請求並添加必要的安全頭
export function middleware(request) {
  // 創建一個基於原始請求的響應
  const response = NextResponse.next();

  // 添加安全頭
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self';");

  return response;
}

// 配置中間件應用於哪些路徑
export const config = {
  matcher: [
    // 排除靜態文件和API路由
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
