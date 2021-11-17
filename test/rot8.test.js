const rot8 = require("../ciphering/rot8");

test("Check rot8 ciphering, english alphabet, encoding", () => {
  expect(rot8("abcdEFGH", 1)).toBe("ijklMNOP");
});

test("Check rot8 ciphering, english alphabet and symbols, encoding", () => {
  expect(rot8("This is secret. Message about '_' symbol!", 1)).toBe(
    "Bpqa qa amkzmb. Umaaiom ijwcb '_' agujwt!"
  );
});

test("Check rot8 ciphering, cyrillic alphabet, encoding", () => {
  expect(rot8("абв", 1)).toBe("абв");
});

test("Check rot8 ciphering, english alphabet and symbols, decoding", () => {
  expect(rot8("This is secret. Message about '_' symbol!", 0)).toBe(
    "Lzak ak kwujwl. Ewkksyw stgml '_' kqetgd!"
  );
});
