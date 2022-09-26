import { db } from "../database/db-config";

interface Review {
  reviewerName: string;
  itemName: string;
  rating: number;
  comments: string;
}

export async function reviewsByNameFilter(name: string) {
  const reviewer = await db("reviews").where("reviewerName", name);
  return reviewer;
}

export async function insertReview(review: Review) {
  const [submitedReview] = await db("reviews").insert(review, [
    "reviewerName",
    "itemName",
    "rating",
    "comments",
  ]);
  return submitedReview;
}
