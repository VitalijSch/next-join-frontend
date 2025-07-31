import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuth = !!token; // replace with real check

  const isOnPublicPage =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (!isAuth && !isOnPublicPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuth && isOnPublicPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signup"],
};
