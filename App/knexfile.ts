import type { Knex } from "knex";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

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
