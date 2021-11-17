const { stderr } = require("process");
const process = require("process");
const {
  isConfigHere,
  isDuplicated,
  checkConfig,
  checkInputFile,
  checkOutputFile,
} = require("./optionsExports");

// Handling command line options

const optionsHandling = () => {
  let options = process.argv.slice(2);

  let inputFile;
  let outputFile;
  let cipheringOrder;

  // Passing Ciphering order, input file and out file to variables

  const passArguments = () => {
    for (let i = 0; i < options.length; i++) {
      if (options[i] === "-c" || options[i] === "--config") {
        cipheringOrder = options[i + 1];
      } else if (options[i] === "-i" || options[i] === "--input") {
        inputFile = options[i + 1];
      } else if (options[i] === "-o" || options[i] === "--output") {
        outputFile = options[i + 1];
      }
    }
  };

  if (!isConfigHere(options)) {
    stderr.write(
      "ERROR: Config option is required. Please enter config for ciphers"
    );
    process.exit(1);
  }

  const duplicates = isDuplicated(options);
  for (let item of duplicates) {
    if (Object.values(item)[0] > 1) {
      stderr.write(
        `ERROR: Option ${
          Object.keys(item)[0]
        } is duplicated. Please enter options list without duplication`
      );
      process.exit(1);
    }
  }

  passArguments();
  checkInputFile(inputFile);
  checkOutputFile(outputFile);

  if (!checkConfig(cipheringOrder)) {
    stderr.write(
      "ERROR: Invalid config option. Should be a string with pattern {XY(-)}n"
    );
    process.exit(1);
  }

  return [inputFile, outputFile, cipheringOrder];
};

module.exports = optionsHandling;
