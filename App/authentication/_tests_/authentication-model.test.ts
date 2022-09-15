import { getUserByFilter, insertUser } from "../authentication-model";
import { db } from "../../database/db-config";

test("it is the correct environment for the tests", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

test("can insert a user ", async () => {
  const user = {
    username: "dave123",
    password: "walter",
    phoneNumber: "6179433455",
  };
  await insertUser(user);
});

describe("Hobbit db access functions", () => {
  test("auth getByUserFilter is working to find if their is a unique username", async () => {
    const username = "dave123";
    const result = await getUserByFilter(username);
    expect(result.length).toBe(0);
  });
});

/*
got this error with my last time trying to see if my tests work:
ENOENT: no such file or directory, scandir 
'/Users/conleyfam/Desktop/programmingProjects/medicalSymptomsBE/migrations'
*/
