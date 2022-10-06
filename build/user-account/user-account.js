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
const reviews_middleware_1 = require("../reviews/reviews-middleware");
const user_account_model_1 = require("./user-account-model");
// left off trying to post to the userAddressInfo table and got an error when
// inserting the data. The data shows in the req body, but I need to fix the insert
// function to the databse
const router = (0, express_1.Router)();
router.get("/:id/address", reviews_middleware_1.validateToken, (req, res, next) => { });
router.post("/:id/address", reviews_middleware_1.validateToken, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, phone, firstName, lastName, address, apartment_suite_etc, city, state, zipcode, } = req.body;
        const { id } = req.params;
        console.log(id);
        const userInfo = {
            username,
            phone,
            firstName,
            lastName,
            address,
            apartment_suite_etc,
            city,
            state,
            zipcode,
            id,
        };
        const userAddressInfo = yield (0, user_account_model_1.addUserAddressInfo)(userInfo);
        res.status(200).json(userAddressInfo);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
