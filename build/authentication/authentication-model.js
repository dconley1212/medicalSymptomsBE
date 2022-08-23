"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = exports.getUserByFilter = exports.getUserByID = void 0;
const db_config_1 = require("../database/db-config");
function getUserByID(id) {
    return (0, db_config_1.db)("users").where("id", id);
}
exports.getUserByID = getUserByID;
function getUserByFilter(filter) {
    return (0, db_config_1.db)("users").where("username", filter.username);
}
exports.getUserByFilter = getUserByFilter;
function insertUser(user) {
    const newUser = (0, db_config_1.db)("users").insert(user);
    console.log(newUser);
}
exports.insertUser = insertUser;
