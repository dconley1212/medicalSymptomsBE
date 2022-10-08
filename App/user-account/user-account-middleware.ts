import { Request, Response, NextFunction } from "express";
import { getUserAddressInfo } from "./user-account-model";

export const checkIfUserAddressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user_id = parseInt(id);

  const [userAddress] = await getUserAddressInfo(user_id);
  if (userAddress.user_id) {
    next();
  } else {
    next({ status: 404, message: "user information not found" });
  }
};
