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
exports.insertReview = exports.reviewsByNameFilter = void 0;
const db_config_1 = require("../database/db-config");
function reviewsByNameFilter(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const reviewer = yield (0, db_config_1.db)("reviews").where("reviewerName", name);
        return reviewer;
    });
}
exports.reviewsByNameFilter = reviewsByNameFilter;
function insertReview(review) {
    return __awaiter(this, void 0, void 0, function* () {
        const [submitedReview] = yield (0, db_config_1.db)("reviews").insert(review, [
            "reviewerName",
            "itemName",
            "rating",
            "comments",
        ]);
        return submitedReview;
    });
}
exports.insertReview = insertReview;
