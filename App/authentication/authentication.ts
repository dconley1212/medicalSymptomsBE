import { Router, Request, Response } from "express";

// Left off trying to get the route working, but I feel like it is because my Route
// isn't even being hit when I run the server to listen for it.

const router = Router();

router.route("/register").get((req: Request, res: Response) => {
  res.send("hello");
});

export default router;
