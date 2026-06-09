import { NextResponse } from "next/server";
import pool from "@/db/db-connect";

export async function GET() {
  try {
    const contact = await pool.query(
      `SELECT id, full_name, email, phone, event_type, event_date, guest_count, budget_range, details, created_at
       FROM contact_submissions
       ORDER BY created_at DESC`
    );

    const quick = await pool.query(
      `SELECT id, full_name, email, phone, created_at
       FROM users
       ORDER BY created_at DESC`
    );

    return NextResponse.json({
      contact: contact.rows,
      quick: quick.rows,
    });
  } catch (error) {
    console.error("Admin fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions." },
      { status: 500 }
    );
  }
}
