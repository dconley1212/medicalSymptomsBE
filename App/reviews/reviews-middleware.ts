import { Request, Response, NextFunction } from "express";
import * as fs from "fs";
import * as path from "path";
import jwt, { verify } from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const publicKey = fs.readFileSync(
    path.join(__dirname, "../../../public.pem")
  );

  let token = req.headers.authorization?.split(" ")[1];

  if (token) {
    verify(token, publicKey, (err, decocded) => {
      if (err) {
        next({ status: 404, message: "bad token" });
      } else {
        res.locals.jwt = decocded;
        next();
      }
    });
  } else {
    next({ status: 401, message: "missing token" });
  }
};
