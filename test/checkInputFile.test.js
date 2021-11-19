// const checkInputFile = require("../optionsHandling/checkInputFile");

// jest.mock("fs");
// const fs = require("fs");

// test("Should show an error message and exit process if given input file doesnt exist or with no read access", () => {
//   let stderr = "";
//   jest
//     .spyOn(process.stderr, "write")
//     .mockImplementation((text) => (stderr += text));

//   const exit = jest.fn();
//   jest.spyOn(process, "exit").mockImplementation(exit);

//   fs.accessSync = jest.fn();
//   fs.accessSync.mockReturnValue(false);

//   checkInputFile("./inpt.txt");

//   expect(stderr).toBe(
//     "ERROR: Input file doesn't exist or there is not permission to read it"
//   );
//   expect(exit).toHaveBeenCalledWith(1);
// });
