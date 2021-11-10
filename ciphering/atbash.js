// function for Atbash encoding/decoding

const atbash = (input) => {
  let text = input.split("");
  const alphabetBefore = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetAfter = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

  let output = [];

  for (let char of text) {
    let index = 0; // index of character before encoding

    let whichCase = "";

    // for English alphabet symbols
    if (/[a-zA-Z]/.test(char)) {
      char.toUpperCase() === char
        ? (whichCase = "upper")
        : (whichCase = "lower");

      index = alphabetBefore.indexOf(char.toUpperCase());

      whichCase === "upper"
        ? output.push(alphabetAfter[index].toUpperCase())
        : output.push(alphabetAfter[index].toLowerCase());
    }

    // for all other symbols
    else {
      output.push(char);
    }
  }

  return output.join("");
};

module.exports = atbash;
