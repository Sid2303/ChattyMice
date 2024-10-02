import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware () ");

  if (!cookies().has("token")) {
    console.log(cookies().has("token") + "     this is cookies from token");
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}
//array below tells which paths are able to call middleware when they are accessed.
export const config = {
  matcher: ["/chats/:path*", "/api/login/:path*"],
};
