import { Router, Request, Response, NextFunction } from "express";
import { validateToken } from "../reviews/reviews-middleware";
import {
  addUserAddressInfo,
  UserAddress,
  getUserAddressInfo,
} from "./user-account-model";
import { checkIfUserAddressExists } from "./user-account-middleware";

const router = Router();

router.get(
  "/:id/address",
  validateToken,
  checkIfUserAddressExists,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const user_id = parseInt(id);

      const [userAddress] = await getUserAddressInfo(user_id);

      res.status(200).json(userAddress);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/:id/address",
  validateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        username,
        phone,
        firstName,
        lastName,
        address,
        apartment_suite_etc,
        city,
        state,
        zipcode,
        user_id,
      } = req.body;

      const userInfo: UserAddress = {
        username,
        phone,
        firstName,
        lastName,
        address,
        apartment_suite_etc,
        city,
        state,
        zipcode,
        user_id,
      };
      const userAddressInfo = await addUserAddressInfo(userInfo);
      res.status(200).json(userAddressInfo);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/:id/insuranceInfo",
  validateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
  }
);

export default router;
