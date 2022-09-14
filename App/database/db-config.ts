import knex from "knex";
import { config } from "./knexfile-config";

const environment: string = process.env.DB_ENV || "development";

export const db = knex(config[environment]);
