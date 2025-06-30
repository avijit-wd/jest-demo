import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut: StringUtils;

    // Jest hooks///////////////////

    // beforeAll(() => {
    //   // database connection
    // });

    // afterAll(() => {
    //   // tear down database connection
    // });

    beforeEach(() => {
      sut = new StringUtils();
      console.log("setup");
    });

    // afterEach(() => {
    //   //clear mocks
    //   console.log("after each");
    // });
    it("Should return correct uppercase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
      console.log("actual test");
    });

    // Error check test
    it("should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }

      expect(expectError).toThrow();
    });

    it("should throw error on invalid argument - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrow();
    });

    it("should throw error on invalid argument - try catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("should throw error message with Invalid argument!");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument!");
        done();
      }
    });
  });

  it("should return uppercase of a valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act
    const actual = toUpperCase("abc");

    //   assert
    expect(actual).toBe("ABC");
  });

  // Parameterized tests
  describe("ToUpperCase example", () => {
    it.each([
      {
        input: "abc",
        expected: "ABC",
      },
      {
        input: "My-String",
        expected: "MY-STRING",
      },
      {
        input: "def",
        expected: "DEF",
      },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);

      expect(actual).toBe(expected);
    });
  });

  describe("getStrinInfo for arg My-String should", () => {
    test("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });

    test("return right lowercase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });

    test("return right upperCase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });

    test("return right characters", () => {
      const actual = getStringInfo("My-String");

      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
    });

    test("return defined extra info", () => {
      const actual = getStringInfo("My-String");

      expect(actual.extraInfo).not.toBeUndefined();
    });

    test("return right extra info", () => {
      const actual = getStringInfo("My-String");

      expect(actual.extraInfo).not.toBeUndefined();
    });
  });
});
