import { Request, Response, NextFunction } from "express";
import { getUserByFilter } from "./authentication-model";

export const checkAllFieldsFilled = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, phoneNumber } = req.body;

  if (!username) {
    next({ status: 400, message: "missing username" });
  } else if (!password) {
    next({ status: 400, message: "missing password" });
  } else if (!phoneNumber) {
    next({ status: 400, message: "missing phone number" });
  } else {
    next();
  }
};

export const checkUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.body;
    const [exists] = await getUserByFilter(username);

    console.log(exists);

    if (exists.username !== username) {
      next();
    } else {
      next({ status: 400, message: "username already exists" });
    }
  } catch (err) {
    next(err);
  }
};
