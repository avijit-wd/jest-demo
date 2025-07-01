jest.mock("../../app/doubles/otherUtils", () => ({
  ...jest.requireActual("../../app/doubles/otherUtils"),
  calculateComplexity: () => {
    return 10;
  },
}));

jest.mock("uuid", () => ({
  v4: () => "123",
}));

import * as OtherUtils from "../../app/doubles/otherUtils";

describe("module tests", () => {
  test("calculate complexity", () => {
    const result = OtherUtils.calculateComplexity({} as any);
    expect(result).toBe(10);
    console.log(10);
  });

  test("keep other functions", () => {
    const result = OtherUtils.toUpperCase("abc");

    expect(result).toBe("ABC");
    console.log(result);
  });

  test("string with id", () => {
    const result = OtherUtils.toLowerCaseWithId("ABC");
    console.log(result);
    expect(result).toBe("abc123");
  });
});
