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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_middleware_1 = require("./authentication-middleware");
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = (0, express_1.Router)();
// running into an error with the filter function I believe in the model component
// when I am pinging the route and I believe it is during the middleware checkUsername
//I need to figure out how to implement the model correctly and check what the
// necessary steps to testing correctly. For example: Can I test a route with
// a function to insert into a database without migrating data? Or what are
// the appropriate steps
router.post("/register", authentication_middleware_1.checkAllFieldsFilled, authentication_middleware_1.checkUsername, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, phoneNumber } = req.body;
        const salt = bcrypt_1.default.genSaltSync(8);
        const hash = bcrypt_1.default.hashSync(password, salt);
        // const newUser = await insertUser({
        //   username,
        //   password: hash,
        //   phoneNumber,
        // });
        const newUser = { username, password: hash, phoneNumber };
        res.status(200).json(newUser);
        // res.send({ username: "jonny" });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
