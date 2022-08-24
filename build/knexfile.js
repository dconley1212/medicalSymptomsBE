"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// Update with your config settings.
exports.config = {
    development: {
        client: "postgresql",
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
