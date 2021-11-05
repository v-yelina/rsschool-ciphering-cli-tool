// const fs = require("fs");
const processs = require("process");


// const readableStream = fs.createReadStream("source.txt", 'utf-8');

// let data = '';

// readableStream.on('data', chunk => data += chunk);
// readableStream.on("end", () => console.log("End", data));
// readableStream.on("error", (error) => console.log("Error", error.message));

console.log("Hi there!");

let arguments = processs.argv.slice(2);
let inputFile;
let outputFile;


if (arguments[0] !== '-c' && arguments[0] !== '--config') {
    throw new Error("Config option is required. Please enter config for ciphers");
}

let duplicates = [...arguments];
for (let i = 0; i < duplicates.length; i++) {
    if (duplicates[i] === '--config') {
        duplicates[i] = '-c';
    } else if (duplicates[i] === '--input') {
        duplicates[i] = '-i';
    } else if (duplicates[i] === '--output') {
        duplicates[i] = '-o';
    }
}

let findDuplicates = Object.values(duplicates.reduce((c, v) => {
  c[v] = c[v] || [v, 0];
  c[v][1]++;
  return c;
},{})).map(o=>({[o[0]] : o[1]}));

for (let item of findDuplicates) {
    if (Object.values(item)[0] > 1) {
        throw new Error(`Option ${Object.keys(item)[0]} is duplicated. Please enter options list without duplication`);
    }
}

const cipheringOrder = arguments[1];

for (let i = 2; i < arguments.length; i++) {
    if (arguments[i] === '-i' || arguments[i] === '--input') {
        inputFile = arguments[i + 1];
    } else if (arguments[i] === '-o' || arguments[i] === '--output') {
        outputFile = arguments[i + 1];
    }
}

console.log(inputFile, outputFile);


