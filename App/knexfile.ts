require("ts-node/register");

module.exports = {
  client: "pg",
  connection: process.env.DEV_DATABASE_URL,
  pool: {
    min: 2,
    max: 10,
  },
};
