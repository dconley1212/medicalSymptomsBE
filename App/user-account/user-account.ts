import { Router, Request, Response, NextFunction } from "express";
import { validateToken } from "../reviews/reviews-middleware";
import { addUserAddressInfo, UserAddress } from "./user-account-model";

// left off trying to post to the userAddressInfo table and got an error when
// inserting the data. The data shows in the req body, but I need to fix the insert
// function to the databse

const router = Router();

router.get(
  "/:id/address",
  validateToken,
  (req: Request, res: Response, next: NextFunction) => {}
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
      } = req.body;

      const { id } = req.params;

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
        user_id: parseInt(id),
      };
      const userAddressInfo = await addUserAddressInfo(userInfo);
      res.status(200).json(userAddressInfo);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
