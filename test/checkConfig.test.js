const { TestWatcher } = require("@jest/core");
const { checkConfig } = require("../optionsHandling/optionsExports");

test("Check right config", () => {
  expect(checkConfig("C1-C1-R0-A")).toBe(true);
});

test("Check config with additional symbols", () => {
  expect(checkConfig("C1-C1-R0-A-")).toBe(false);
});

test("Check config with wrong pattern", () => {
  expect(checkConfig("C1-C1-R0A1")).toBe(false);
});
