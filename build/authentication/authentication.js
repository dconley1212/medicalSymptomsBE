"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Left off trying to get the route working, but I feel like it is because my Route
// isn't even being hit when I run the server to listen for it.
const router = (0, express_1.Router)();
router.route("/register").get((req, res) => {
    res.send("hello");
});
exports.default = router;
