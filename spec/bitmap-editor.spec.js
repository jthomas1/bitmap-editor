/* global describe beforeEach it spyOn expect */

const BitmapEditor = require('../app/bitmap-editor');

describe('Bitmap editor', function() {
    let bmp;

    beforeEach(function() {
        bmp = new BitmapEditor();
    });

    describe('Method: lineHandler', function() {
        it('is case insensitive', function() {
            spyOn(bmp, 'buildMatrix');
            bmp.lineHandler('i');
            expect(bmp.buildMatrix).toHaveBeenCalled();
        });

        it('calls buildMatrix when the line begins with I', function() {
            spyOn(bmp, 'buildMatrix');
            bmp.lineHandler('I 5 6');
            expect(bmp.buildMatrix).toHaveBeenCalledWith('5', '6');
        });

        it('calls clear when the line begins with C', function() {
            spyOn(bmp, 'clear');
            bmp.lineHandler('c');
            expect(bmp.clear).toHaveBeenCalled();
        });

        it('calls print if the line begins with S', function() {
            spyOn(bmp, 'print');
            bmp.lineHandler('S');
            expect(bmp.print).toHaveBeenCalled();
        });

        it('throws an error when an unrecognised command is given', function() {
            expect(() => {
                bmp.lineHandler('hello');
            }).toThrow();
        });
    });

    describe('Method: parseArgs', function () {
        it('Converts the input to upper case', function () {
            expect(bmp.parseArgs('acbdfjsdwi')).toEqual(['ACBDFJSDWI']);
        });

        it('Splits the input string into individual arguments', function () {
            expect(bmp.parseArgs('a bc')).toEqual(['A', 'BC']);
        });

        it('throws an error if there are too many arguments', function () {
            expect( () => {
                bmp.parseArgs('a b c d e f g h i j k l m n o p');
            }).toThrow();
        });

        it('throws an error if there are not enough arguments', function () {
            expect( () => {
                bmp.parseArgs('');
            }).toThrow();
        });
    });

    describe('Method: buildMatrix', function() {

    });
});
