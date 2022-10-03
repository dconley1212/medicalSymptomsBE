"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviews_middleware_1 = require("./reviews-middleware");
const reviews_model_1 = require("./reviews-model");
/*
left off with inserting my first review into the database and made the get request route
functional for making a get request on the front-end
*/
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield (0, reviews_model_1.getAllReviews)();
        res.status(200).json(reviews);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/", reviews_middleware_1.validateToken, reviews_middleware_1.checkReviewNameAndItemReviewed, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { reviewerName, itemName, rating, comments } = req.body;
        const review = yield (0, reviews_model_1.insertReview)({
            reviewerName: reviewerName,
            itemName: itemName,
            rating: rating,
            comments: comments,
        });
        console.log(review);
        res.status(200).json(review);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
