import { Request, Response, NextFunction } from "express";
import * as fs from "fs";
import * as path from "path";
import jwt, { verify } from "jsonwebtoken";
import { reviewsByNameFilter } from "./reviews-model";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const publicKey = fs.readFileSync(
    path.join(__dirname, "../../../public.pem")
  );

  let token = req.headers.authorization;
  console.log(token);
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

export const checkReviewNameAndItemReviewed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reviewerName, itemName } = req.body;

  const [reviewer] = await reviewsByNameFilter(reviewerName);

  console.log(reviewer);

  if (!reviewer || reviewer.itemName !== itemName) {
    next();
  } else {
    next({ status: 409, message: "you have already reviewed this item" });
  }
};
