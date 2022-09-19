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
const authentication_model_1 = require("./authentication-model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_utils_1 = require("../utils/jwt.utils");
const router = (0, express_1.Router)();
router.post("/register", authentication_middleware_1.checkAllFieldsFilled, authentication_middleware_1.checkUsername, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, phoneNumber } = req.body;
        const salt = bcrypt_1.default.genSaltSync(8);
        const hash = bcrypt_1.default.hashSync(password, salt);
        const newUser = yield (0, authentication_model_1.insertUser)({
            username,
            password: hash,
            phoneNumber,
        });
        res.status(200).json(newUser);
    }
    catch (err) {
        next(err);
    }
}));
router.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const [user] = yield (0, authentication_model_1.getUserByFilter)(username);
        console.log(user);
        if (!user) {
            next({ status: 404, message: "Username does not exist" });
        }
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (match) {
            const jwt = (0, jwt_utils_1.generateToken)(user.username, user.id);
            console.log(jwt);
            res.status(200).json({
                message: `Welcome back ${user.username}!`,
                token: jwt,
            });
        }
        else {
            next({ status: 401, message: "invalid credentials" });
        }
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
