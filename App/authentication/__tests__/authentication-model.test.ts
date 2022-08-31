import { isJSDocNonNullableType } from "typescript";
import { getUserByFilter } from "../authentication-model";

describe("authentication db acess functions", () => {
  test("the getUserByFilter", async () => {
    const username = "jonny";
    const [user] = await getUserByFilter(username);
    expect(user.username).toBe("jonny");
  });
});
