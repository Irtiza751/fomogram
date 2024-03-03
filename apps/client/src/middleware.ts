// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("next pathname: ", req.nextUrl.pathname);

  const token = req.cookies.get("_token")?.value;
  const pathname = req.nextUrl.pathname;

  if (!token && pathname === "/") {
    return Response.redirect(new URL("/login", req.url));
  }

  if (token && pathname == "/login") {
    return Response.redirect(new URL("/", req.url));
  }

  if (token && pathname == "/register") {
    return Response.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
