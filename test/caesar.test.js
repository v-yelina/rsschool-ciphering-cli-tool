const caesar = require("../ciphering/caesar");

test("Check caesar ciphering, english alphabet, encoding", () => {
  expect(caesar("abcdEFGH", 1)).toBe("bcdeFGHI");
});

test("Check caesar ciphering, english alphabet and symbols, encoding", () => {
  expect(caesar("This is secret. Message about '_' symbol!", 1)).toBe(
    "Uijt jt tfdsfu. Nfttbhf bcpvu '_' tzncpm!"
  );
});

test("Check caesar ciphering, cyrillic alphabet, encoding", () => {
  expect(caesar("абв", 1)).toBe("абв");
});

test("Check caesar ciphering, english alphabet and symbols, decoding", () => {
  expect(caesar("This is secret. Message about '_' symbol!", 0)).toBe(
    "Sghr hr rdbqds. Ldrrzfd zants '_' rxlank!"
  );
});
