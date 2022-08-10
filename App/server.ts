import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

const server: Application = express();

server.use(express.json);

const Port = process.env.Port || 9000;

server.listen(Port, (): void => {
  console.log("Server is listening");
});
