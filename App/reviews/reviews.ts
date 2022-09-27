import { Router, Request, Response, NextFunction } from "express";
import {
  validateToken,
  checkReviewNameAndItemReviewed,
} from "./reviews-middleware";
import { insertReview, getAllReviews } from "./reviews-model";

/*
left off with creating the middleware for if the reviewerName for the item exists
 then they can't post and added the model for inserting a reivew and filtering for one.
 I should be able to test the whole functionality next time around
*/

const router = Router();

router.get(
  "/",
  validateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviews = await getAllReviews();

      res.status(200).json(reviews);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/",
  validateToken,
  checkReviewNameAndItemReviewed,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { reviewerName, itemName, rating, comments } = req.body;
      const review = await insertReview({
        reviewerName: reviewerName,
        itemName: itemName,
        rating: rating,
        comments: comments,
      });
      console.log(review);
      res.status(200).json(review);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
