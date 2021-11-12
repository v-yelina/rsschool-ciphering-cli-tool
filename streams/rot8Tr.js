// Transform stream for ROT-8

const rot8 = require("../ciphering/rot8");
const { Transform } = require("stream");

class rot8Tr extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    let input = chunk.toString("utf8");
    this.push(rot8(input, this.action));
    callback();
  }
}

module.exports = rot8Tr;
