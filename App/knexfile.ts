import type { Knex } from "knex";
import * as dotenv from "dotenv";
import { resolve } from "path";

/// left off with the error below when I tried to migrate the data to the database
// I figured out the dot env file is work on the server.ts file so I need to figure out
// how to get it working in the knexfile.ts or the knexfile-config.ts

dotenv.config({ path: resolve(__dirname, "../../.env") });

module.exports = {
  testing: {
    client: "pg",
    connection: {
      database: "postgres_tests",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true,
  },
  development: {
    client: "pg",
    connection: {
      database: "postgres",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true,
  },
};
