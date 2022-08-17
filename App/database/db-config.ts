import { Knex } from "knex";
import { Environment } from "../configuration/config.type";

export interface Config {
  environment?: Environment;
  database?: string;
}
