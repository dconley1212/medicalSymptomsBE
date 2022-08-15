import express, { Application } from "express";
import * as dotenv from "dotenv";
import Router from "./authentication/authentication";

dotenv.config({ path: __dirname + "/.env" });

const server: Application = express();

server.use(express.json);
server.use("/app/auth", Router);

const Port = process.env.Port || 9000;

server.listen(Port, (): void => {
  console.log("Server is listening");
});
