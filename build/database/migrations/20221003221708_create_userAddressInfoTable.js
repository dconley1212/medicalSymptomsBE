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
exports.down = exports.up = void 0;
// encountered a error with the foreign key designation so I am going to need to start
// on this tomorrow
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable("userAddressInfo", (userAddressInfo) => {
            userAddressInfo.increments("userAddress_id");
            userAddressInfo.string("username").notNullable().unique();
            userAddressInfo.string("phone").notNullable();
            userAddressInfo.string("firstName").notNullable();
            userAddressInfo.string("lastName").notNullable();
            userAddressInfo.string("address").notNullable();
            userAddressInfo.string("apartment_suite_etc").nullable();
            userAddressInfo.string("city").notNullable();
            userAddressInfo.string("state").notNullable();
            userAddressInfo.string("zipcode").notNullable();
            userAddressInfo.integer("user_id").notNullable();
            userAddressInfo.foreign("user_id").references("id").inTable("users");
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTableIfExists("userAddresInfo");
    });
}
exports.down = down;
