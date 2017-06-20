'use strict';

const fs = require('fs');
const readline = require('readline');

var BitmapEditor = function () {
};

BitmapEditor.prototype.buildMatrix = function () {

};

BitmapEditor.prototype.clear = function () {

};

BitmapEditor.prototype.lineHandler = function (line) {
    line = line.toUpperCase();
    if (line[0] === 'I') {
        this.buildMatrix();
    }

    if(line[0] === 'C') {
        this.clear();
    }
};

BitmapEditor.prototype.run = function (file) {
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
};


module.exports = BitmapEditor;
