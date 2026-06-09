import { NextResponse } from "next/server";
import pool from "@/db/db-connect";

export async function GET() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        event_type VARCHAR(100) NOT NULL,
        event_date DATE NOT NULL,
        guest_count INTEGER NOT NULL,
        budget_range VARCHAR(100),
        details TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(30) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    return NextResponse.json({
      success: true,
      message: "Tables 'contact_submissions' and 'users' are ready.",
    });
  } catch (error) {
    console.error("Create table error:", error);
    return NextResponse.json(
      { error: "Failed to create table. Check your database connection." },
      { status: 500 },
    );
  }
}
