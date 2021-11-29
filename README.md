# Ciphering CLI tool

This tool encodes and decodes a text by by 3 substitution ciphers:
* [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
* [Atbash cipher](https://en.wikipedia.org/wiki/Atbash)
* [ROT-8 as variation of ROT-13](https://en.wikipedia.org/wiki/ROT13)
(only the English alphabet, all other characters will be unchanged) from file or command line and writes the result in file or in command line.


## Installation:
To use this tool you need to:
1. Clone this repository.
```bash
git clone git@github.com:v-yelina/rsschool-ciphering-cli-tool.git
```
2. go to the application folder
2. Run `npm install` or `npm i` to download packages

## Usage

```bash
node ciphering-cli [options] 
```

CLI accepts **4 options** (short alias and full name):
1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file
4. **-h or --help**: help with options list and examples of usage.

For example, config `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"



## Usage example: 
 
```bash
$ node ciphering-cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node ciphering-cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node ciphering-cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node ciphering-cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`





