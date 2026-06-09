import { NextResponse } from "next/server";
import { z } from "zod";
import pool from "@/db/db-connect";

const bodySchema = z.object({
  fullName: z.string().min(2).max(255),
  email: z.string().email().max(255),
  phone: z
    .string()
    .min(7)
    .max(30)
    .regex(/^[+\d\s()-]+$/, "Invalid phone number"),
});

export async function POST(request: Request) {
  try {
    const raw = await request.json();

    const parsed = bodySchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    await pool.query(
      `INSERT INTO users (full_name, email, phone)
       VALUES ($1, $2, $3)`,
      [parsed.data.fullName, parsed.data.email, parsed.data.phone],
    );

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Quick form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
