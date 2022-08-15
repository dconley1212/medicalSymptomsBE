"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//left off trying to understand two things. 1. how typscript when executed adds to the javascript files
// 2. when building my routes should I build them as classes as I have seen some examples like that online.
const router = (0, express_1.Router)();
router.get("/login", (req, res) => {
    res.send("hello");
});
exports.default = router;
