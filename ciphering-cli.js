const fs = require("fs");
const { Stream } = require("stream");
const optionsHandling = require("./optionsHandling/optionsHandling");
const ciphering = require("./ciphering/ciphering");

const argumentsArray = optionsHandling(process.argv.slice(2));
const inputFile = argumentsArray[0];
const outputFile = argumentsArray[1];
const cipheringOrder = argumentsArray[2].split("-");
let stats;
let inputSize;
console.log(argumentsArray);
if (inputFile) {
  stats = fs.statSync(inputFile);
  inputSize = stats.size;
}

const streams = ciphering(cipheringOrder); // array of transform streams

streams.unshift(
  inputFile
    ? fs.createReadStream(inputFile, { encoding: "utf-8", end: inputSize })
    : process.stdin
); // add readable stream to array
streams.push(
  outputFile ? fs.createWriteStream(outputFile, { flags: "a" }) : process.stdout
); // add writable stream to array

try {
  Stream.pipeline(...streams, (err) => {
    if (err) {
      console.error("ERROR: ", err.message);
      process.exit(1);
    }
  });
} catch (err) {
  console.error("ERROR: ", err.message);
  process.exit(1);
}
