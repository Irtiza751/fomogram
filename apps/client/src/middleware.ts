// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/search", "/edit", "/heart", "/profile"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("sessionToken")?.value;
  const pathname = req.nextUrl.pathname;

  if (!token && protectedRoutes.includes(pathname)) {
    return Response.redirect(new URL("/login", req.url));
  }

  if (token && (pathname == "/login" || pathname == "/register")) {
    return Response.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
