const passArguments = require("../optionsHandling/passArguments");

describe("Checking passing arguments to variables", () => {
  test("All options exists, short form", () => {
    expect(
      passArguments([
        "-c",
        "C1-C1-R0-A",
        "-i",
        "./input.txt",
        "-o",
        "./output.txt",
      ])
    ).toStrictEqual(["./input.txt", "./output.txt", "C1-C1-R0-A"]);
  });

  test("All options exists, long form", () => {
    expect(
      passArguments([
        "--config",
        "C1-C1-R0-A",
        "--input",
        "./input.txt",
        "--output",
        "./output.txt",
      ])
    ).toStrictEqual(["./input.txt", "./output.txt", "C1-C1-R0-A"]);
  });

  test("Only config option available", () => {
    expect(passArguments(["-c", "C1-C1-R0-A"])).toStrictEqual([
      undefined,
      undefined,
      "C1-C1-R0-A",
    ]);
  });
});
