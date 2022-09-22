import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {});

router.post("/", (req: Request, res: Response, next: NextFunction) => {});

export default router;
