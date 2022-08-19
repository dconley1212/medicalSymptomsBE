import { Request, Response, NextFunction } from "express";

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
