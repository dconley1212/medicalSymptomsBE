"use strict";
test("it is the correct environment for the tests", () => {
    expect(process.env.DB_ENV).toBe("testing");
});
