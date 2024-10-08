import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';
import Database from "better-sqlite3";
const sqlite = new Database("./db/sqlite.db",{fileMustExist:true});

export const db:BetterSQLite3Database = drizzle(sqlite,{ logger: true });

