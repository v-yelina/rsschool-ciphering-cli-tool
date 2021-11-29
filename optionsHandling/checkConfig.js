const { stderr } = require("process");
const process = require("process");

// Check config option pattern
const checkConfig = (conf) => {
  if (!/^([A-Z0-9]{1,2}-)*[A-Z0-9]{1,2}$/g.test(conf)) {
    stderr.write(
      "ERROR: Invalid config option. Should be a string with pattern {XY(-)}n"
    );
    process.exit(1);
  }
};

module.exports = checkConfig;
