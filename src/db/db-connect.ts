import { Pool } from "pg";

const raw = process.env.DATABASE_URL;

if (!raw) {
  throw new Error("DATABASE_URL is not set. Check your .env.local file.");
}

// Strip sslmode from connection string — handled explicitly below
const connectionString = raw.replace(/(\?|&)sslmode=[^&]*/g, "").replace(/\?$/, "");

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

pool.on("error", (err) => {
  console.error("Unexpected DB pool error:", err);
});

export default pool;
