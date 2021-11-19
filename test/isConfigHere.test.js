const { TestWatcher } = require("@jest/core");
const { isConfigHere } = require("../optionsHandling/optionsExports");

test("Running without config should throw an error and exit a process", () => {
  let stderr = "";
  jest
    .spyOn(process.stderr, "write")
    .mockImplementation((text) => (stderr += text));

  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  isConfigHere(["-i", "./input.txt", "-o", "./output.txt"]);

  expect(stderr).toBe(
    "ERROR: Config option is required. Please enter config for ciphers"
  );
  expect(exit).toHaveBeenCalledWith(1);
});

test("Running with config option should not exit a process, short version of option", () => {
  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  isConfigHere([
    "-c",
    "C1-C1-R0-A1",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
  ]);

  expect(exit).not.toHaveBeenCalled();
});

test("Running with config option should not exit a process, long version of option", () => {
  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  isConfigHere([
    "--config",
    "C1-C1-R0-A1",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
  ]);

  expect(exit).not.toHaveBeenCalled();
});
