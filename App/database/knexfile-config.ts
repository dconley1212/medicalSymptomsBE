import { Knex } from "knex";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

export const config: { [key: string]: Knex.Config } = {
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
      user: "postgres",
      password: "AmyandDave101918",
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
