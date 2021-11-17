const { isDuplicated } = require("../optionsHandling/optionsExports");

test("Check config with short options", () => {
  expect(
    isDuplicated([
      "-c",
      "C1-C1-R0-A1",
      "-i",
      "./input.txt",
      "-o",
      "./output.txt",
    ])
  ).toStrictEqual([{ "-c": 1 }, { "-i": 1 }, { "-o": 1 }]);
});

test("Check config with long options", () => {
  expect(
    isDuplicated([
      "--config",
      "C1-C1-R0-A1",
      "--input",
      "./input.txt",
      "--output",
      "./output.txt",
    ])
  ).toStrictEqual([{ "-c": 1 }, { "-i": 1 }, { "-o": 1 }]);
});
