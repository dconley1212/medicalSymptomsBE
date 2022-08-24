"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
