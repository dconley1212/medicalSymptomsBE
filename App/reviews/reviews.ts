import { Router, Request, Response, NextFunction } from "express";
import { validateToken } from "./reviews-middleware";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {});

router.post(
  "/",
  validateToken,
  (req: Request, res: Response, next: NextFunction) => {
    const { reviewerName, itemName, rating, comments } = req.body;
  }
);

export default router;
