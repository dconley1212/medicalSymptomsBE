import { Router, Request, Response } from "express";

// 2. when building my routes should I build them as classes as I have seen some examples like that online.

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send("hello");
});

export default router;
