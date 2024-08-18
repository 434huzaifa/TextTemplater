import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema:"./db/schema.ts",
    out:"./db/migrations",
    dialect:"sqlite",
    verbose:true,
    strict:true,
    dbCredentials:{
        url:"./api/db/sqlite.db"
    }
})