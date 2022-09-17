import { Router, Request, Response, NextFunction } from "express";
import {
  checkAllFieldsFilled,
  checkUsername,
} from "./authentication-middleware";
import {
  insertUser,
  getUserByFilter,
  userFromFilter,
} from "./authentication-model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.utils";

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

      const [user]: userFromFilter[] = await getUserByFilter(username);

      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const jwt = generateToken(user.password, user.id);
        res.status(200).json({
          message: `Welcome back ${user.username}!`,
          token: jwt,
        });
      } else {
        next({ status: 401, message: "invalid credentials" });
      }
    } catch (err) {
      next(err);
    }
  }
);

export default router;
