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
const authentication_model_1 = require("../authentication-model");
const db_config_1 = require("../../database/db-config");
test("it is the correct environment for the tests", () => {
    expect(process.env.DB_ENV).toBe("testing");
});
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_config_1.db.migrate.rollback();
    yield db_config_1.db.migrate.latest();
}));
test("can insert a user ", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        username: "dave123",
        password: "walter",
        phoneNumber: "6179433455",
    };
    yield (0, authentication_model_1.insertUser)(user);
}));
describe("Hobbit db access functions", () => {
    test("auth getByUserFilter is working to find if their is a unique username", () => __awaiter(void 0, void 0, void 0, function* () {
        const username = "dave123";
        const result = yield (0, authentication_model_1.getUserByFilter)(username);
        expect(result.length).toBe(0);
    }));
});
/*
got this error with my last time trying to see if my tests work:
ENOENT: no such file or directory, scandir
'/Users/conleyfam/Desktop/programmingProjects/medicalSymptomsBE/migrations'
*/
