const atbash = require("../ciphering/atbash");

test("Check atbash ciphering, english alphabet", () => {
  expect(atbash("abcdEFGH")).toBe("zyxwVUTS");
});

test("Check atbash ciphering, english alphabet and symbols", () => {
  expect(atbash("This is secret. Message about '_' symbol!")).toBe(
    "Gsrh rh hvxivg. Nvhhztv zylfg '_' hbnylo!"
  );
});

test("Check atbash ciphering, cyrillic alphabet", () => {
  expect(atbash("абв")).toBe("абв");
});
