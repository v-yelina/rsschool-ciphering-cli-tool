// Transform stream for Atbash

const atbash = require("../ciphering/atbash");
const { Transform } = require("stream");

class atbashTr extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    let input = chunk.toString("utf8");
    this.push(atbash(input));
    callback();
  }
}

module.exports = atbashTr;
