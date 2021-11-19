// Passing Ciphering order, input file and out file to variables
const passArguments = (options) => {
  let inputFile;
  let outputFile;
  let cipheringOrder;
  for (let i = 0; i < options.length; i += 2) {
    if (options[i] === "-c" || options[i] === "--config") {
      cipheringOrder = options[i + 1];
    } else if (options[i] === "-i" || options[i] === "--input") {
      inputFile = options[i + 1];
    } else if (options[i] === "-o" || options[i] === "--output") {
      outputFile = options[i + 1];
    }
  }
  return [inputFile, outputFile, cipheringOrder];
};

module.exports = passArguments;
