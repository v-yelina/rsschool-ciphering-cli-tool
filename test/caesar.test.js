const caesar = require("../ciphering/caesar");

describe("Checking caesar ciphering, encodind", () => {
  test("English alphabet, the result should be as provided", () => {
    expect(caesar("abcdEFGH", 1)).toBe("bcdeFGHI");
  });

  test("English alphabet and symbols, symbols should be ignored", () => {
    expect(caesar("This is secret. Message about '_' symbol!", 1)).toBe(
      "Uijt jt tfdsfu. Nfttbhf bcpvu '_' tzncpm!"
    );
  });

  test("Cyrillic alphabet, should be ignored", () => {
    expect(caesar("абв", 1)).toBe("абв");
  });

  test("Index of encoded symbol more then anphabet length, the result should be as provided", () => {
    expect(caesar("Z", 1)).toBe("A");
  });
});

describe("Checking caesar ciphering, decodind", () => {
  test("English alphabet and symbols, the result should be as provided", () => {
    expect(caesar("This is secret. Message about '_' symbol!", 0)).toBe(
      "Sghr hr rdbqds. Ldrrzfd zants '_' rxlank!"
    );
  });
  test("Index of encoded symbol less then anphabet length, the result should be as provided", () => {
    expect(caesar("A", 0)).toBe("Z");
  });
});
