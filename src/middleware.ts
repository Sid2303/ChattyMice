import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const userToken = request.cookies.get("userToken");

  const publicPath = path === "/register" || path === "/login" || path === "/";

  if (publicPath && userToken) {
    return NextResponse.redirect(new URL("/chats", request.url));
  }
  if (!userToken && !publicPath) {
    return NextResponse.redirect(new URL("/register", request.url));
  }
}

export const config = {
  matcher: ["/chats", "/login", "/register", "/"],
};
