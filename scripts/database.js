import * as SQLite from 'expo-sqlite';

// Creates the database when the app is launched
const db = await SQLite.openDatabaseAsync('fineance');

await db.execAsync(`
    CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY NOT NULL, category TEXT NOT NULL, type TEXT NOT NULL, money REAL DEFAULT 0, description TEXT, date TEXT NOT NULL);
    `)