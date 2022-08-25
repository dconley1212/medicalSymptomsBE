import { Router, Request, Response, NextFunction } from "express";
import {
  checkAllFieldsFilled,
  checkUsername,
} from "./authentication-middleware";
import { insertUser } from "./authentication-model";
import bcrypt from "bcrypt";

const router = Router();

//running into an error with the middleware for some reason it seems. The endpoint is working
// and adding users info to the database but the response back is sending an error that
// the username already exists when it is added.
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

export default router;
