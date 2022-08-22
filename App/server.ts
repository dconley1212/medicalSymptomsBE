import express, { Application, Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import authentication from "./authentication/authentication";

interface Error {
  status?: number;
  message?: string;
}

dotenv.config({ path: __dirname + "/.env" });

const server: Application = express();

server.use(express.json());
server.use("/auth", authentication);
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    custom: "Something went wrong",
    message: err.message,
  });
});

const Port = process.env.PORT || 9000;

server.listen(Port, (): void => {
  console.log("Server is listening");
});
