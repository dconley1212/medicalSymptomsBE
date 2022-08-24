import knex from "knex";
import { config } from "./knexfile-config";

export const db = knex(config.development);
