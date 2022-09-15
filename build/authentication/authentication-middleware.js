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
exports.checkUsername = exports.checkAllFieldsFilled = void 0;
const authentication_model_1 = require("./authentication-model");
const checkAllFieldsFilled = (req, res, next) => {
    const { username, password, phoneNumber } = req.body;
    if (!username) {
        next({ status: 400, message: "missing username" });
    }
    else if (!password) {
        next({ status: 400, message: "missing password" });
    }
    else if (!phoneNumber) {
        next({ status: 400, message: "missing phone number" });
    }
    else {
        next();
    }
};
exports.checkAllFieldsFilled = checkAllFieldsFilled;
const checkUsername = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.body;
        const exists = yield (0, authentication_model_1.getUserByFilter)(username);
        if (exists.length === 0) {
            next();
        }
        else {
            next({ status: 400, message: "username already exists" });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.checkUsername = checkUsername;
