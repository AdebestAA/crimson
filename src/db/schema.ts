import pool from "@/db/db-connect";

export async function ensureTable() {
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
  `);
}

export type ContactSubmission = {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  budgetRange?: string;
  details?: string;
};

export async function insertSubmission(data: ContactSubmission) {
  const result = await pool.query(
    `INSERT INTO contact_submissions
       (full_name, email, phone, event_type, event_date, guest_count, budget_range, details)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING id`,
    [
      data.fullName,
      data.email,
      data.phone,
      data.eventType,
      data.eventDate,
      data.guestCount,
      data.budgetRange ?? null,
      data.details ?? null,
    ]
  );
  return result.rows[0].id as number;
}
