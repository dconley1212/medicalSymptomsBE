import express, { Request, Response, Application, request } from "express";

const server: Application = express();

const Port = 9000;

server.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js");
});

server.listen(Port, (): void => {
  console.log("Server is listening");
});
