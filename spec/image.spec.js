const { Image } = require('../app/image');

describe('Class: Image', () => {
    let image;

    describe('Method: constructor', () => {
        beforeEach(() => {
            image = new Image(1, 1);
        });

        it('Creates a pixel matrix', () => {
            expect(image.pixels).toBeDefined();
        });
    });

    describe('Method: buildMatrix', () => {
        it('Returns an array', () => {
            expect(Array.isArray(image.buildMatrix({ width: 1, height: 1 }))).toBe(true);
        });

        it('Initialises the array to be of the length specified', () => {
            expect(image.buildMatrix({ width: 3, height: 1 }).length).toBe(3);
        });

        it('Initialises each item in the array as another array', () => {
            expect(Array.isArray(image.buildMatrix({ width: 1, height: 3 })[0])).toBe(true);
        });

        it('Initialises each item in the array to be of the length specified by the height parameter', () => {
            expect(image.buildMatrix({ width: 1, height: 3})[0].length).toBe(3);
        });

        it('Throws an error if the width is 0', () => {
            expect(() => image.buildMatrix({ width: 0, height: 4 })).toThrow();
        });

        it('Throws an error if the width is negative', () => {
            expect(() => image.buildMatrix({ width: -2, height: 4 })).toThrow();
        });

        it('Throws an error if the height is 0', () => {
            expect(() => image.buildMatrix({ width: 4, height: 0 })).toThrow();
        });

        it('Throws an error if the height is negative', () => {
            expect(() => image.buildMatrix({ width: 2, height: -1 })).toThrow();
        });
    });
});
