import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

const server: Application = express();

const Port = process.env.Port || 9000;

server.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js");
});

server.listen(Port, (): void => {
  console.log("Server is listening");
});
