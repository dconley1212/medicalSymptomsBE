import { Request, Response, NextFunction } from "express";
import { getUserByFilter } from "./authentication-model";

const checkAllFieldsFilled = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, phone_number } = req.body;

  if (!username) {
    next({ status: 400, message: "missing username" });
  } else if (!password) {
    next({ status: 400, message: "missing password" });
  } else if (!phone_number) {
    next({ status: 400, message: "missing phone number" });
  } else {
    next();
  }
};

const checkUserName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.body;
    const exists = await getUserByFilter(username);

    if (!exists) {
      next();
    } else {
      next({ status: 400, message: "username already exists" });
    }
  } catch (err) {
    next(err);
  }
};
