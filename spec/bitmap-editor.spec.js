/* global describe beforeEach it spyOn expect */

const { BitmapEditor } = require('../app/bitmap-editor');

describe('Class: BitmapEditor', () => {
    let editor;

    beforeEach(() => {
        editor = new BitmapEditor();
    });

    describe('Method: constructor', () => {
        it('creates a new instance of the BitmapEditor class', () => {
            expect(editor).toBeDefined();
        });
    });

    describe('Method: lineHandler', () => {
        beforeEach(() => {
            editor.createNewImage({ width: 1, height: 1 });
        });

        it('calls clear when the line begins with C', () => {
            spyOn(editor.image, 'clear');
            editor.lineHandler('c');
            expect(editor.image.clear).toHaveBeenCalled();
        });

        it('calls show if the line begins with S', () => {
            spyOn(editor.image, 'show');
            editor.lineHandler('S');
            expect(editor.image.show).toHaveBeenCalled();
        });

        it('throws an error when an unrecognised command is given', () => {
            expect(() => editor.lineHandler('hello')).toThrow();
        });
    });

    describe('Method: parseArgs', () => {
        it('Converts the input to upper case', () => {
            expect(editor.parseArgs('acbdfjsdwi')).toEqual(['ACBDFJSDWI']);
        });

        it('Splits the input string into individual arguments', () => {
            expect(editor.parseArgs('a bc')).toEqual(['A', 'BC']);
        });

        it('throws an error if there are too many arguments', () => {
            expect(() => editor.parseArgs('a b c d e f g h i j k l m n o p')).toThrow();
        });

        it('throws an error if there are not enough arguments', () => {
            expect(() => editor.parseArgs('')).toThrow();
        });
    });
});
