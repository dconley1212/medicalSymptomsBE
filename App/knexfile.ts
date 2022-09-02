import type { Knex } from "knex";

module.exports = {
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
