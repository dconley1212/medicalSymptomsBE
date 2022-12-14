"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const authentication_1 = __importDefault(require("./authentication/authentication"));
const reviews_1 = __importDefault(require("./reviews/reviews"));
const user_account_1 = __importDefault(require("./user-account/user-account"));
const cors_1 = __importDefault(require("cors"));
const path_1 = require("path");
dotenv.config({ path: (0, path_1.resolve)(__dirname, "../../.env") });
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use("/auth", authentication_1.default);
server.use("/reviews", reviews_1.default);
server.use("/user", user_account_1.default);
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        custom: "Something went wrong",
        message: err.message,
    });
});
const Port = process.env.PORT || 9000;
server.listen(Port, () => {
    console.log("Server is listening");
});
