import { getUserByFilter, getUserByID } from "../authentication-model";

afterAll((done) => {
  done();
});

describe("authentication db acess functions", () => {
  test("getUserById", async () => {
    const userId = 1;
    const [user] = await getUserByID(userId);
    expect(user.username).toBe("jonny");
  });

  test("the getUserByFilter", async () => {
    const username = "jonny";
    const [user] = await getUserByFilter(username);
    expect(user.username).toBe("jonny");
  });
});
