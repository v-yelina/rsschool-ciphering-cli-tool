// Transform stream for Caesar

const caesar = require("../ciphering/caesar");
const { Transform } = require("stream");

class caesarTr extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    let input = chunk.toString("utf8");
    this.push(caesar(input, this.action));
    callback();
  }
}

module.exports = caesarTr;
