'use strict';

const fs = require('fs');
const readline = require('readline');
const { Image } = require('./image');

class BitmapEditor {
    constructor() {
        this.image = [];
    }


    colourPixel({ x, y, colour }) {
        
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
            this.image = Image.buildMatrix(args[1], args[2]);
            break;
        case 'C':
            this.clear();
            break;
        case 'L':
            this.colourPixel();
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
