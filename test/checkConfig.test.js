const { TestWatcher } = require("@jest/core");
const { checkConfig } = require("../optionsHandling/optionsExports");

test("Running with config with wrong pattern should throw an error and exit a process", () => {
  let stderr = "";
  jest
    .spyOn(process.stderr, "write")
    .mockImplementation((text) => (stderr += text));

  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  checkConfig("C1-C1-R0A1");

  expect(stderr).toBe(
    "ERROR: Invalid config option. Should be a string with pattern {XY(-)}n"
  );
  expect(exit).toHaveBeenCalledWith(1);
});

test("Running with config with additional symbols should throw an error and exit a process", () => {
  let stderr = "";
  jest
    .spyOn(process.stderr, "write")
    .mockImplementation((text) => (stderr += text));

  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  checkConfig("C1-C1-R0-A-");

  expect(stderr).toBe(
    "ERROR: Invalid config option. Should be a string with pattern {XY(-)}n"
  );
  expect(exit).toHaveBeenCalledWith(1);
});

test("Running with valid config option should not exit a process", () => {
  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  checkConfig("C1-C1-R0-A");

  expect(exit).not.toHaveBeenCalled();
});
