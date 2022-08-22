import { Router, Request, Response, NextFunction } from "express";
import {
  checkAllFieldsFilled,
  checkUsername,
} from "./authentication-middleware";
import { insertUser } from "./authentication-model";
import bcrypt from "bcrypt";

const router = Router();

// running into an error with the filter function I believe in the model component
// when I am pinging the route and I believe it is during the middleware checkUsername
//I need to figure out how to implement the model correctly and check what the
// necessary steps to testing correctly. For example: Can I test a route with
// a function to insert into a database without migrating data? Or what are
// the appropriate steps

router.post(
  "/register",
  checkAllFieldsFilled,
  checkUsername,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password, phoneNumber } = req.body;
      const salt = bcrypt.genSaltSync(8);
      const hash = bcrypt.hashSync(password, salt);
      // const newUser = await insertUser({
      //   username,
      //   password: hash,
      //   phoneNumber,
      // });
      const newUser = { username, password: hash, phoneNumber };
      res.status(200).json(newUser);

      // res.send({ username: "jonny" });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
