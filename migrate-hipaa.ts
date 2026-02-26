import { createClient } from '@libsql/client';

const url = 'file:local.db';
const authToken = process.env.TURSO_AUTH_TOKEN;

const db = createClient({
    url,
    authToken,
});

async function migrate() {
    console.log('Starting HIPAA migration...');

    const columns = [
        { name: 'hipaa_authorized', type: 'INTEGER DEFAULT 0' },
        { name: 'authorized_at', type: 'TEXT' },
        { name: 'ip_address', type: 'TEXT' },
        { name: 'user_agent', type: 'TEXT' }
    ];

    for (const col of columns) {
        try {
            await db.execute(`ALTER TABLE leads ADD COLUMN ${col.name} ${col.type}`);
            console.log(`Added column ${col.name}`);
        } catch (err: any) {
            if (err.message.includes('duplicate column name')) {
                console.log(`Column ${col.name} already exists`);
            } else {
                console.error(`Error adding column ${col.name}:`, err.message);
            }
        }
    }

    console.log('Migration finished.');
}

migrate();
