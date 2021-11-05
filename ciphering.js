const caesar = require("./caesar");
const rot8 = require("./rot8");
const atbash = require("./atbash");

const ciphering = () => {
  const input = 'This is secret. Message about "_" symbol!'.split("");
  const cipheringOrder = "C1-C0-A-R1-R0-A-R0-R0-C1-A".split("-");
  let output = input;

  for (let ciph of cipheringOrder) {
    switch (ciph) {
      case "C1":
        output = caesar(output, 1);
        break;
      case "C0":
        output = caesar(output, 0);
        break;
      case "R1":
        output = rot8(output, 1);
        break;
      case "R0":
        output = rot8(output, 0);
        break;
      case "A":
        output = atbash(output);
        break;
      default:
        return "There is not such a ciphering case";
    }
  }

  return output;
};

console.log(ciphering());
