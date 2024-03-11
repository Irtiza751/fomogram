// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/home", "/search", "/edit", "/heart", "/profile"];

export function middleware(req: NextRequest) {
  console.log("next pathname: ", req.nextUrl.pathname);

  const token = req.cookies.get("auth_token")?.value;
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
