import { knex } from "knex";
// import { Environment } from "../configuration/config.type";
import { knexfile } from "../knexfile";

// export interface Config {
//   environment?: Environment;
//   database?: knex.PgConnectionConfig;
// }

// export interface DatabaseURL {
//   DATABASE_URL?: string;
// }

// left of trying to figure out how to finish setting up this component because
// it needs to invoke the knex function with the knexfile and the environment
// as the two parameters it looks like but I am not completely sure

export const dbConfig = knex(knexfile["development"]);
