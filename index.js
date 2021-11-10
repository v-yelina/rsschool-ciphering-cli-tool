const fs = require("fs");
const { Stream } = require("stream");
const optionsHandling = require("./optionsHandling");
const ciphering = require("./ciphering/ciphering");

const argumentsArray = optionsHandling();
const inputFile = argumentsArray[0];
const outputFile = argumentsArray[1];

console.log("Hi there!");

const streams = ciphering(); // array of transform streams

streams.unshift(
  inputFile ? fs.createReadStream(inputFile, "utf-8") : process.stdin
); // add readable stream to array
streams.push(
  outputFile ? fs.createWriteStream(outputFile, { flags: "a" }) : process.stdout
); // add writable stream to array

try {
  Stream.pipeline(...streams, (err) => {
    if (err) {
      console.error("pipeline-error: ", err);
    }
  });
} catch (err) {
  console.error("pipeline failed with error:", err);
}
