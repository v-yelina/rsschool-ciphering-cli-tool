const { isDuplicated } = require("../optionsHandling/optionsExports");

// Input: User passes the same cli argument twice; Result: Error message is shown;

test("Running with duplicate option should throw an error and exit a process", () => {
  let stderr = "";
  jest
    .spyOn(process.stderr, "write")
    .mockImplementation((text) => (stderr += text));

  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  isDuplicated([
    "-c",
    "C1-C1-R0-A1",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
    "-o",
    "./output.txt",
  ]);

  expect(stderr).toBe(
    "ERROR: Option -o is duplicated. Please enter options list without duplication"
  );
  expect(exit).toHaveBeenCalledWith(1);
});

test("Running with duplicate option short + long form should throw an error and exit a process", () => {
  let stderr = "";
  jest
    .spyOn(process.stderr, "write")
    .mockImplementation((text) => (stderr += text));

  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  isDuplicated([
    "-c",
    "C1-C1-R0-A1",
    "--config",
    "C1-A1",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
  ]);

  expect(stderr).toBe(
    "ERROR: Option -c is duplicated. Please enter options list without duplication"
  );
  expect(exit).toHaveBeenCalledWith(1);
});

test("Running without duplicated options should not exit a process, short version of option", () => {
  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  isDuplicated([
    "-c",
    "C1-C1-R0-A1",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
  ]);

  expect(exit).not.toHaveBeenCalled();
});

test("Running without duplicated options should not exit a process, long version of option", () => {
  const exit = jest.fn();
  jest.spyOn(process, "exit").mockImplementation(exit);

  isDuplicated([
    "--config",
    "C1-C1-R0-A1",
    "-i",
    "./input.txt",
    "-o",
    "./output.txt",
  ]);

  expect(exit).not.toHaveBeenCalled();
});
