import { Router, Request, Response, NextFunction } from "express";
import { validateToken } from "../reviews/reviews-middleware";

const router = Router();

router.get(
  "/:id/address",
  validateToken,
  (req: Request, res: Response, next: NextFunction) => {}
);

router.post(
  "/:id/address",
  validateToken,
  (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
