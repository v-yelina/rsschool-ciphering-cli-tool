const atbash = require("../ciphering/atbash");

describe("Checking atbash ciphering", () => {
  test("Check english alphabet, result should be as provided", () => {
    expect(atbash("abcdEFGH")).toBe("zyxwVUTS");
  });

  test("English alphabet and symbols, symbols should be ignored", () => {
    expect(atbash("This is secret. Message about '_' symbol!")).toBe(
      "Gsrh rh hvxivg. Nvhhztv zylfg '_' hbnylo!"
    );
  });

  test("Cyrillic alphabet, should be ignored", () => {
    expect(atbash("абв")).toBe("абв");
  });
});
