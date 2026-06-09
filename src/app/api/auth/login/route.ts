import { NextResponse } from "next/server";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { error: "Admin credentials not configured. Set ADMIN_EMAIL and ADMIN_PASSWORD in .env.local." },
        { status: 500 }
      );
    }

    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const token = await signToken({ email });
    await setAuthCookie(token);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
