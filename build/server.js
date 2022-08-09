"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const Port = 9000;
server.get("/", (req, res) => {
    res.send("Hello Typescript with Node.js");
});
server.listen(Port, () => {
    console.log("Server is listening");
});
