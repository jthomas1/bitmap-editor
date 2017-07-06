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

        it('Initialises the image canvas to an empty array', () => {
            expect(Array.isArray(editor.image)).toBe(true);
        });
    });

    describe('Method: lineHandler', () => {
        it('is case insensitive', () => {
            spyOn(editor, 'buildMatrix');
            editor.lineHandler('i');
            expect(editor.buildMatrix).toHaveBeenCalled();
        });

        it('calls buildMatrix when the line begins with I', () => {
            spyOn(editor, 'buildMatrix');
            editor.lineHandler('I 5 6');
            expect(editor.buildMatrix).toHaveBeenCalledWith('5', '6');
        });

        it('calls clear when the line begins with C', () => {
            spyOn(editor, 'clear');
            editor.lineHandler('c');
            expect(editor.clear).toHaveBeenCalled();
        });

        it('calls print if the line begins with S', () => {
            spyOn(editor, 'print');
            editor.lineHandler('S');
            expect(editor.print).toHaveBeenCalled();
        });

        it('throws an error when an unrecognised command is given', () => {
            expect(() => {
                editor.lineHandler('hello');
            }).toThrow();
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
            expect(() => {
                editor.parseArgs('a b c d e f g h i j k l m n o p');
            }).toThrow();
        });

        it('throws an error if there are not enough arguments', () => {
            expect(() => {
                editor.parseArgs('');
            }).toThrow();
        });
    });

    describe('Method: buildMatrix', () => {
        it('Returns an array', () => {
            expect(Array.isArray(editor.buildMatrix({ width: 1, height: 1 }))).toBe(true);
        });

        it('Initialises the array to be of the length specified', () => {
            expect(editor.buildMatrix({ width: 3, height: 1 }).length).toBe(3);
        });

        it('Initialises each item in the array as another array', () => {
            expect(Array.isArray(editor.buildMatrix({ width: 1, height: 3 })[0])).toBe(true);
        });

        it('Initialises each item in the array to be of the length specified by the height parameter', () => {
            expect(editor.buildMatrix({ width: 1, height: 3})[0].length).toBe(3);
        });
    });
});
