import { Router, Request, Response } from "express";
import {
  checkAllFieldsFilled,
  checkUsername,
} from "./authentication-middleware";

// Left off trying to get the route working, but I feel like it is because my Route
// isn't even being hit when I run the server to listen for it.

const router = Router();

router.post(
  "/register",
  checkAllFieldsFilled,
  checkUsername,
  (req: Request, res: Response) => {
    res.send({ username: "jonny" });
  }
);

export default router;
