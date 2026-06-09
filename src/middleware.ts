import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "crimson-admin-secret-change-me-in-env"
);

export async function middleware(request: NextRequest) {
  // Protect /admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
