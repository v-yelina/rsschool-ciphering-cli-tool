const rot8 = require("../ciphering/rot8");

describe("Checking ROT-8 ciphering, encodind", () => {
  test("English alphabet, the result should be as provided", () => {
    expect(rot8("abcdEFGH", 1)).toBe("ijklMNOP");
  });

  test("English alphabet and symbols, symbols should be ignored", () => {
    expect(rot8("This is secret. Message about '_' symbol!", 1)).toBe(
      "Bpqa qa amkzmb. Umaaiom ijwcb '_' agujwt!"
    );
  });

  test("Cyrillic alphabet, should be ignored", () => {
    expect(rot8("абв", 1)).toBe("абв");
  });
});

describe("Checking ROT-8 ciphering, decodind", () => {
  test("English alphabet, the result should be as provided", () => {
    expect(rot8("This is secret. Message about '_' symbol!", 0)).toBe(
      "Lzak ak kwujwl. Ewkksyw stgml '_' kqetgd!"
    );
  });
});
