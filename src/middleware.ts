import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const userToken = request.cookies.get("token");

  const publicPath = path === "/register" || path === "/login";
  if (path === "/") {
    return;
  }
  if (publicPath && userToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!userToken && !publicPath) {
    return NextResponse.redirect(new URL("/register", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/chats", "/login", "/register"],
};
