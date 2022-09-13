"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
/// left off with the error below when I tried to migrate the data to the database
dotenv_1.default.config({ path: (0, path_1.resolve)(__dirname + "../../.env") });
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
