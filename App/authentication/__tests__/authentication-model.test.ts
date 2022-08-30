import { isJSDocNonNullableType } from "typescript";
import { getUserByFilter } from "../authentication-model";

describe("authentication db acess functions", () => {
  test("the getUserByFilter", async () => {
    const username = "jonny";
    const user = await getUserByFilter(username);
    expect(user).toMatchObject({
      username: "jonny",
      password: "$2b$08$o4dul9KdgfxHOhueDtZknOm8fkyGfAMHpB5bev2l.ubMSSna3rzMi",
      phoneNumber: "61745588411",
    });
  });
});
