const ciphering = require("../ciphering/ciphering");

describe("Checking ciphering", () => {
  test("Running with incorrect sequence of symbols as argument for --config should throw an error and exit a process", () => {
    let stderr = "";
    jest
      .spyOn(process.stderr, "write")
      .mockImplementation((text) => (stderr += text));

    const exit = jest.fn();
    jest.spyOn(process, "exit").mockImplementation(exit);

    ciphering(["K", "A"]);

    expect(stderr).toBe(
      "There is not such a ciphering case. Available cases: C1, C0, R1, R0, A"
    );
    expect(exit).toHaveBeenCalledWith(1);
  });

  test("Running with incorrect number for action should throw an error and exit a process", () => {
    let stderr = "";
    jest
      .spyOn(process.stderr, "write")
      .mockImplementation((text) => (stderr += text));

    const exit = jest.fn();
    jest.spyOn(process, "exit").mockImplementation(exit);

    ciphering(["C1", "A", "R0", "R3"]);

    expect(stderr).toBe(
      "There is not such a ciphering case. Available cases: C1, C0, R1, R0, A"
    );
    expect(exit).toHaveBeenCalledWith(1);
  });

  test("Running with valid sequence of symbols as argument for --config should not exit a process", () => {
    const exit = jest.fn();
    jest.spyOn(process, "exit").mockImplementation(exit);

    ciphering(["C1", "C0", "R1", "R0", "A"]);

    expect(exit).not.toHaveBeenCalled();
  });
});
