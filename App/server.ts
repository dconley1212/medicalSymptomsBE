import express, { Application } from "express";
import * as dotenv from "dotenv";
import authentication from "./authentication/authentication";

dotenv.config({ path: __dirname + "/.env" });

const server: Application = express();

server.use(express.json);
server.use("/auth", authentication);

const Port = 9000;

server.listen(Port, (): void => {
  console.log("Server is listening");
});
