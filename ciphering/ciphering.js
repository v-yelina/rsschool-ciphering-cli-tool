const { stderr } = require("process");
const caesarTr = require("../streams/caesarTr");
const rot8Tr = require("../streams/rot8Tr");
const atbashTr = require("../streams/atbashTr");

const ciphering = (cipheringOrder) => {
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
        stderr.write(
          "There is not such a ciphering case. Available cases: C1, C0, R1, R0, A"
        );
        process.exit(1);
    }
  }
  return output;
};

module.exports = ciphering;
