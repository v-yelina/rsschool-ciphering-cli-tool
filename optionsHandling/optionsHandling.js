const {
  isConfigHere,
  isDuplicated,
  checkConfig,
  checkInputFile,
  checkOutputFile,
  passArguments,
} = require("./optionsExports");

// Handling command line options

const optionsHandling = (options) => {
  const args = passArguments(options);
  const inputFile = args[0];
  const outputFile = args[1];
  const cipheringOrder = args[2];

  isConfigHere(options);
  isDuplicated(options);
  checkInputFile(inputFile);
  checkOutputFile(outputFile);
  checkConfig(cipheringOrder);

  return [inputFile, outputFile, cipheringOrder];
};

module.exports = optionsHandling;
