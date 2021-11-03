// function for Ceasar Cipher encoding/decoding

const caesar = () => {
  let text = 'This is secret. Message about "_" symbol!'.split("");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let action = 0;

  let output = [];

  for (let char of text) {
    let indF = 0; // index of character before encoding/decoding
    let indT = 0; // index of character after encoding/decoding

    let whichCase = "";

    // for English alphabet symbols
    if (/[a-zA-Z]/.test(char)) {
      char.toUpperCase() === char
        ? (whichCase = "upper")
        : (whichCase = "lower");
      indF = alphabet.indexOf(char.toUpperCase());
      action === 1 ? (indT = indF + 1) : (indT = indF - 1);

      if (indT > alphabet.length - 1) {
        indT -= alphabet.length;
      } else if (indT === -1) {
        indT = alphabet.length + indT;
      }

      whichCase === "upper"
        ? output.push(alphabet[indT].toUpperCase())
        : output.push(alphabet[indT].toLowerCase());
    }
    // for all other symbols
    else {
      output.push(char);
    }
  }
  return output.join("");
};

console.log(caesar());
