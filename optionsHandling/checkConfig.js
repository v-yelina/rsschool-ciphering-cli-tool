// Check config option pattern
const checkConfig = (conf) => {
  return /^([A-Z0-9]{1,2}-)*[A-Z0-9]{1,2}$/g.test(conf);
};

module.exports = checkConfig;
