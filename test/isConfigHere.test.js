const { TestWatcher } = require("@jest/core");
const { isConfigHere } = require("../optionsHandling/optionsExports");

// const isConfigHere = (args) => {
//   return args.includes("-c") || args.includes("--config");
// };

test("Config option existed, short version of option", () => {
  expect(
    isConfigHere([
      "-c",
      "C1-C1-R0-A1",
      "-i",
      "./input.txt",
      "-o",
      "./output.txt",
    ])
  ).toBe(true);
});

test("Config option existed, long version of option", () => {
  expect(
    isConfigHere([
      "--config",
      "C1-C1-R0-A1",
      "-i",
      "./input.txt",
      "-o",
      "./output.txt",
    ])
  ).toBe(true);
});

test("Config option not existed", () => {
  expect(isConfigHere(["-i", "./input.txt", "-o", "./output.txt"])).toBe(false);
});
