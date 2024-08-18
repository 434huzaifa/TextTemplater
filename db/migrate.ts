import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db } from './database';


// this will automatically run needed migrations on the database
migrate(db, { migrationsFolder: './migrations' });  