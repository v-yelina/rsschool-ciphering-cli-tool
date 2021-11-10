const optionsHandling = require("../optionsHandling");
const caesarTr = require("../cipheringTransformStreams/caesarTr");
const rot8Tr = require("../cipheringTransformStreams/rot8Tr");
const atbashTr = require("../cipheringTransformStreams/atbashTr");

const ciphering = () => {
  const cipheringOrder = optionsHandling()[2].split("-");

  let output = []; // array of transform streams, depending on config option

  for (let ciph of cipheringOrder) {
    switch (ciph) {
      case "C1":
        output.push(new caesarTr(1));
        break;
      case "C0":
        output.push(new caesarTr(0));
        break;
      case "R1":
        output.push(new rot8Tr(1));
        break;
      case "R0":
        output.push(new rot8Tr(0));
        break;
      case "A":
        output.push(new atbashTr());
        break;
      default:
        return "There is not such a ciphering case";
    }
  }

  return output;
};

module.exports = ciphering;
