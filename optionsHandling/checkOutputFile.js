const fs = require("fs");
const { stderr } = require("process");
const process = require("process");

// Check existence and permissions of input file
const checkOutputFile = (outputFile) => {
  try {
    if (outputFile) {
      fs.accessSync(outputFile, fs.constants.W_OK);
    }
  } catch (err) {
    stderr.write(
      "ERROR: Output file doesn't exist or there is not permission to write in it"
    );
    process.exit(1);
  }
};

module.exports = checkOutputFile;
