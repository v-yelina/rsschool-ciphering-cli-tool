const { stderr } = require("process");
const processs = require("process");

// Handling command line arguments

const optionsHandling = () => {
    let arguments = processs.argv.slice(2);

    let inputFile;
    let outputFile;
    let cipheringOrder;

    // Check if there is required config option
    if (!arguments.includes('-c') && !arguments.includes('--config')) {
        stderr.write("Config option is required. Please enter config for ciphers");
        process.exit(1);
    }

    // Check if some arguments are duplicated
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
    }, {})).map(o => ({ [o[0]]: o[1] }));

    for (let item of findDuplicates) {
        if (Object.values(item)[0] > 1) {
            stderr.write(`Option ${Object.keys(item)[0]} is duplicated. Please enter arguments list without duplication`);
            process.exit(1);
        }
    }

    // Passing Ciphering order, input file and out file to variables

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === '-c' || arguments[i] === '--config') {
            cipheringOrder = arguments[i + 1];
        } else if (arguments[i] === '-i' || arguments[i] === '--input') {
            inputFile = arguments[i + 1];
        } else if (arguments[i] === '-o' || arguments[i] === '--output') {
            outputFile = arguments[i + 1];
        }
    }


    try {
        /^([A-Z0-9]{1,2}-)*[A-Z0-9]{1,2}$/g.test(cipheringOrder);
    } catch (error) {
        stderr.write('ERROR: Invalid config option. Should be a string with pattern {XY(-)}n');
        process.exit(1);
    }
    return [inputFile, outputFile, cipheringOrder];
}

module.exports = optionsHandling;
exports.inputFile = this.inputFile;
exports.outputFile = this.outputFile;
exports.cipheringOrder = this.cipheringOrder;