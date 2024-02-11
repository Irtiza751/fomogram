import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("_token")?.value;
  const endpoint = request.url.split("/").at(-1);

  if (!token && endpoint !== "login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
