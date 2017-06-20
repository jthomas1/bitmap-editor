/* global describe beforeEach it spyOn expect */

const { BitmapEditor } = require('../app/bitmap-editor');

describe('Class: BitmapEditor', function() {
    let editor;

    beforeEach(function() {
        editor = new BitmapEditor();
    });

    describe('Method: constructor', function () {
        it('creates a new instance of the BitmapEditor class', function () {
            expect(editor).toBeDefined();
        });
    });

    describe('Method: lineHandler', function() {
        it('is case insensitive', function() {
            spyOn(editor, 'buildMatrix');
            editor.lineHandler('i');
            expect(editor.buildMatrix).toHaveBeenCalled();
        });

        it('calls buildMatrix when the line begins with I', function() {
            spyOn(editor, 'buildMatrix');
            editor.lineHandler('I 5 6');
            expect(editor.buildMatrix).toHaveBeenCalledWith('5', '6');
        });

        it('calls clear when the line begins with C', function() {
            spyOn(editor, 'clear');
            editor.lineHandler('c');
            expect(editor.clear).toHaveBeenCalled();
        });

        it('calls print if the line begins with S', function() {
            spyOn(editor, 'print');
            editor.lineHandler('S');
            expect(editor.print).toHaveBeenCalled();
        });

        it('throws an error when an unrecognised command is given', function() {
            expect(() => {
                editor.lineHandler('hello');
            }).toThrow();
        });
    });

    describe('Method: parseArgs', function () {
        it('Converts the input to upper case', function () {
            expect(editor.parseArgs('acbdfjsdwi')).toEqual(['ACBDFJSDWI']);
        });

        it('Splits the input string into individual arguments', function () {
            expect(editor.parseArgs('a bc')).toEqual(['A', 'BC']);
        });

        it('throws an error if there are too many arguments', function () {
            expect( () => {
                editor.parseArgs('a b c d e f g h i j k l m n o p');
            }).toThrow();
        });

        it('throws an error if there are not enough arguments', function () {
            expect( () => {
                editor.parseArgs('');
            }).toThrow();
        });
    });

    describe('Method: buildMatrix', function() {

    });
});
