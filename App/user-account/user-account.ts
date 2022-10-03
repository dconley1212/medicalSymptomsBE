import { Router, Request, Response, NextFunction } from "express";
import { validateToken } from "../reviews/reviews-middleware";

const router = Router();

router.get(
  "/:id",
  validateToken,
  (req: Request, res: Response, next: NextFunction) => {}
);

router.post(
  "/id",
  validateToken,
  (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
