const optionsHandling = require("../optionsHandling/optionsHandling");

describe("Checking options handling", () => {
  test("All options exists, short form", () => {
    expect(
      optionsHandling([
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
      optionsHandling([
        "--config",
        "C1-C1-R0-A",
        "--input",
        "./input.txt",
        "--output",
        "./output.txt",
      ])
    ).toStrictEqual(["./input.txt", "./output.txt", "C1-C1-R0-A"]);
  });

  test("Running with invalid config should throw an error", () => {
    let stderr = "";
    jest
      .spyOn(process.stderr, "write")
      .mockImplementation((text) => (stderr += text));

    const exit = jest.fn();
    jest.spyOn(process, "exit").mockImplementation(exit);

    optionsHandling([
      "--config",
      "C1-C1-R0-A-",
      "-i",
      "./input.txt",
      "-o",
      "./output.txt",
    ]);

    expect(stderr).toBe(
      "ERROR: Invalid config option. Should be a string with pattern {XY(-)}n"
    );
    expect(exit).toHaveBeenCalledWith(1);
  });
});
