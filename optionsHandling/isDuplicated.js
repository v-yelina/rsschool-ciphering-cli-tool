const { stderr } = require("process");
const process = require("process");

// Check if some options are duplicated
const isDuplicated = (options) => {
  let duplicates = [];
  for (let i = 0; i < options.length; i++) {
    if (options[i] === "--config" || options[i] === "-c") {
      duplicates.push("-c");
    } else if (options[i] === "--input" || options[i] === "-i") {
      duplicates.push("-i");
    } else if (options[i] === "--output" || options[i] === "-o") {
      duplicates.push("-o");
    }
  }

  let findDuplicates = Object.values(
    duplicates.reduce((c, v) => {
      c[v] = c[v] || [v, 0];
      c[v][1]++;
      return c;
    }, {})
  ).map((o) => ({ [o[0]]: o[1] }));

  return findDuplicates;
};

module.exports = isDuplicated;
