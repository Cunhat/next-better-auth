import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  tablesFilter: ["next-better-auth_*"],
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
