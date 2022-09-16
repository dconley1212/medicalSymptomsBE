import { Router, Request, Response, NextFunction } from "express";
import {
  checkAllFieldsFilled,
  checkUsername,
} from "./authentication-middleware";
import { insertUser, getUserByFilter, user } from "./authentication-model";
import bcrypt from "bcrypt";

const router = Router();

router.post(
  "/register",
  checkAllFieldsFilled,
  checkUsername,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password, phoneNumber } = req.body;
      const salt = bcrypt.genSaltSync(8);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await insertUser({
        username,
        password: hash,
        phoneNumber,
      });

      res.status(200).json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;

      const user: user[] = await getUserByFilter(username);

      const match = await bcrypt.compare(password, user[0].password);

      if (match) {
      }
    } catch (err) {
      next(err);
    }
  }
);

export default router;
