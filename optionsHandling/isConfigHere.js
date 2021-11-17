// Check if there is required config option
const isConfigHere = (args) => {
  return args.includes("-c") || args.includes("--config");
};

module.exports = isConfigHere;
