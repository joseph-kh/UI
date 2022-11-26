import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  if (url.pathname === "/" && !req.cookies.get("access_token")) {
    url.pathname = `/login`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
