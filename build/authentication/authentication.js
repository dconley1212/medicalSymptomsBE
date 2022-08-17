"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// got the router to work!
const router = (0, express_1.Router)();
router.route("/login").get((req, res) => {
  res.send("hello");
});
exports.default = router;
