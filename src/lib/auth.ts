import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "crimson-admin-secret-change-me-in-env"
);

const COOKIE_NAME = "admin_token";

export async function signToken(payload: { email: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { email: string };
  } catch {
    return null;
  }
}

export async function getAuthCookie() {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value;
}

export async function setAuthCookie(token: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24h
  });
}

export async function removeAuthCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
