const fs = require("fs");
const { stderr } = require("process");
const process = require("process");

// Check existence and permissions of input file
const checkInputFile = (inputFile) => {
  try {
    if (inputFile) {
      fs.accessSync(inputFile, fs.constants.R_OK);
    }
  } catch (err) {
    stderr.write(
      "ERROR: Input file doesn't exist or there is not permission to read it"
    );
    process.exit(1);
  }
};

module.exports = checkInputFile;
