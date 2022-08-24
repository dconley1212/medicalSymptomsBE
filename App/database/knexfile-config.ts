import { Knex } from "knex";

export const config: { [key: string]: Knex.Config } = {
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
