import { Request, Response, NextFunction } from "express";
import * as fs from "fs";
import * as path from "path";
import jwt, { verify } from "jsonwebtoken";

//need to test this to make sure it works but it looks like it is on the right track
// my main question was the trying to figure out if I needed the algorithm option part of
// the parameters for the verify method and how to define the type because what I was trying
// in the jwt.utils.ts file was not working and giving me an error

/*
Additionally before testing the validate token I wanted to get the migration file created
for the new reviews table and be able to set up the model for posting data to the reviews
table
*/

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
