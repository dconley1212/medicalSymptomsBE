require("ts-node/register");
import * as dotenv from "dotenv";
dotenv.config();

export const knexfile = {
  development: {
    client: "pg",
    connection: process.env.DEV_DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
  },
};
