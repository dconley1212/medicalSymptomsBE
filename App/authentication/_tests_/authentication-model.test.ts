import { getUserByFilter, insertUser } from "../authentication-model";

test("it is the correct environment for the tests", () => {
  expect(process.env.DB_ENV).toBe("testing");
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
got this error with my last test: error: select * from 
"users" where "username" = $1 - relation "users" does not exist.
I am wondering it I need to have a migration for the test database
*/
