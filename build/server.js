"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server = express();

server.listen(9000, () => {
  console.log("Port is listening");
});
