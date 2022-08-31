"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
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
