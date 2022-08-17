import { Knex } from "knex";
import { Environment } from "../configuration/config.type";
import knexConfig from "../knexfile";

export interface Config {
  environment?: Environment;
  database?: Knex.PgConnectionConfig;
}

export interface DatabaseURL {
  DATABASE_URL?: string;
}

// left of trying to figure out how to finish setting up this component because
// it needs to invoke the knex function with the knexfile and the environment
// as the two parameters it looks like but I am not completely sure
