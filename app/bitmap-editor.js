'use strict';

const fs = require('fs');
const readline = require('readline');

class BitmapEditor {
    constructor() {
        this.image = [];
    }

    buildMatrix({ width, height }) {
        if (width <= 0) {
            throw new Error(`Image width must be greater than zero: ${width}.`);
        }

        if (height <= 0) {
            throw new Error(`Image height must be greater than zero: ${height}.`);
        }

        let matrix = [];

        for (let i = 0; i < width; i++) {
            let column = [];

            for (let j = 0; j < height; j++) {
                column[j] = 'O';
            }

            matrix[i] = column;
        }

        return matrix;
    }

    clear() {}

    print() {}

    parseArgs(line) {
        if (line.length === 0) {
            throw new Error(`Please provide one of the following commands: I, C, L, V, H, S`);
        }

        line = line.toUpperCase();
        let args = line.split(' ');

        if (args.length > 5) {
            throw new Error(`Too many arguments! ${args}`);
        }

        return args;
    }

    lineHandler(line) {
        let args = this.parseArgs(line);

        switch (args[0]) {
        case 'I':
            this.image = this.buildMatrix(args[1], args[2]);
            break;
        case 'C':
            this.clear();
            break;
        case 'S':
            this.print();
            break;
        default:
            throw new Error(`Unrecognised command: ${args[0]}`);
        }
    }

    run(file) {
        if (!file || !fs.existsSync(file)) {
            console.log('please provide correct file');
            process.exit();
        }

        const lineReader = readline.createInterface({
            input: fs.createReadStream(file)
        });

        lineReader.on('line', line => {
            if (line === 'S') {
                console.log('There is no image');
            } else {
                console.log('unrecognised command :(');
            }
        });
    }
}

module.exports.BitmapEditor = BitmapEditor;
