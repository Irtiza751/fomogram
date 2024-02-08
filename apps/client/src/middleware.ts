// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token");
}

export const config = {
  matcher: ["/", "/login", "/register"],
};
