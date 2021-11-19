const { stderr } = require("process");
const process = require("process");

// Check if there is required config option
const isConfigHere = (args) => {
  if (!(args.includes("-c") || args.includes("--config"))) {
    stderr.write(
      "ERROR: Config option is required. Please enter config for ciphers"
    );
    process.exit(1);
  }
};

module.exports = isConfigHere;
