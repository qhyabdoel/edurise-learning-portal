import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token");
  const pathname = request.nextUrl;

  // if no token and not on login page, redirect to login
  if (!token && pathname.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // if token and on login page, redirect to dashboard
  if (token && pathname.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // otherwise, continue to the requested page
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/courses/:path*",
    "/profile/:path*",
    "/login",
  ],
};
