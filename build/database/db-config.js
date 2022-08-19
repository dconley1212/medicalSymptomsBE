"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const knex_1 = require("knex");
const knexfile_1 = require("../knexfile");
// export interface Config {
//   environment?: Environment;
//   database?: knex.PgConnectionConfig;
// }
exports.dbConfig = (0, knex_1.knex)(knexfile_1.knexfile.development);
