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
exports.addUserAddressInfo = void 0;
const db_config_1 = require("../database/db-config");
const addUserAddressInfo = (userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userInfo);
    const [userAddressInfo] = yield (0, db_config_1.db)("userAddressInfo").insert(userInfo, [
        "username",
        "phone",
        "firstName",
        "lastName",
        "address",
        "apartment_suite_etc",
        "city",
        "state",
        "zipcode",
        "user_id",
    ]);
    console.log(userAddressInfo);
    return userAddressInfo;
});
exports.addUserAddressInfo = addUserAddressInfo;
