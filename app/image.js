'use strict';

class Image {
    constructor({ width, height }){
        this.pixels = this.buildMatrix({ width: width, height:height });
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
}

module.exports.Image = Image;
