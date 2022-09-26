import { Router, Request, Response, NextFunction } from "express";
import { validateToken } from "./reviews-middleware";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {});

router.post(
  "/",
  validateToken,
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
  }
);

export default router;
