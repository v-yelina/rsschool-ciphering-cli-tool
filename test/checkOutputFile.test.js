const checkOutputFile = require("../optionsHandling/checkOutputFile");

jest.mock("fs");
const fs = require("fs");

// Input: User passes -o argument with path to directory that doesn't exist or with no read access; Result: Error message is shown;

describe("Checking given output file", () => {
  test("Should show an error message and exit process if given output file doesnt exist or with no read access", () => {
    let stderr = "";
    jest
      .spyOn(process.stderr, "write")
      .mockImplementation((text) => (stderr += text));

    const exit = jest.fn();
    jest.spyOn(process, "exit").mockImplementation(exit);

    fs.accessSync = jest.fn();
    fs.accessSync.mockImplementation(() => {
      throw new Error();
    });
    checkOutputFile("./inpt.txt");
    expect(stderr).toBe(
      "ERROR: Output file doesn't exist or there is not permission to write in it"
    );
    expect(exit).toHaveBeenCalledWith(1);
  });
});
