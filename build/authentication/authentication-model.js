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
exports.insertUser = exports.getUserByFilter = exports.getUserByID = void 0;
const db_config_1 = require("../database/db-config");
function getUserByID(id) {
    return (0, db_config_1.db)("users").where("id", id);
}
exports.getUserByID = getUserByID;
function getUserByFilter(filter) {
    return (0, db_config_1.db)("users").where("username", filter);
}
exports.getUserByFilter = getUserByFilter;
function insertUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const [newUser] = yield (0, db_config_1.db)("users").insert(user);
        return newUser;
    });
}
exports.insertUser = insertUser;
