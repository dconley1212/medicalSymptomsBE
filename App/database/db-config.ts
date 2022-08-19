import { knex } from "knex";

import { knexfile } from "../knexfile";

// export interface Config {
//   environment?: Environment;
//   database?: knex.PgConnectionConfig;
// }

export const dbConfig = knex(knexfile.development);
