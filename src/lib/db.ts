import { createClient } from '@libsql/client';

const url = import.meta.env.TURSO_DATABASE_URL || 'file:local.db';
const authToken = import.meta.env.TURSO_AUTH_TOKEN;

export const db = createClient({
  url,
  authToken,
});

/**
 * Initialize database schema
 */
export async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      first_name TEXT,
      last_name TEXT,
      email TEXT,
      phone TEXT,
      city TEXT,
      age TEXT,
      bmi TEXT,
      conditions TEXT, -- JSON array
      current_meds TEXT,
      trial_id TEXT,
      trial_title TEXT,
      status TEXT DEFAULT 'new',
      notes TEXT DEFAULT '',
      quality_score INTEGER DEFAULT 0,
      hipaa_authorized INTEGER DEFAULT 0,
      authorized_at TEXT,
      ip_address TEXT,
      user_agent TEXT
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS trials_cache (
      nct_id TEXT PRIMARY KEY,
      data TEXT, -- Full JSON study data
      last_updated TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log('[DB] Persistence layer initialized');
}
