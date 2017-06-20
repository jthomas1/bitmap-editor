const BitmapEditor = require('../app/bitmap-editor');

describe('Bitmap editor', function () {
    let bmp;

    beforeEach(function () {
        bmp = new BitmapEditor();
    });

    describe('Method: lineHandler', function () {
        it('is case insensitive', function () {
            spyOn(bmp, 'buildMatrix');
            bmp.lineHandler('i');
            expect(bmp.buildMatrix).toHaveBeenCalled();
        });

        it('calls buildMatrix when the line begins with I', function () {
            spyOn(bmp, 'buildMatrix');
            bmp.lineHandler('I asdlkasd');
            expect(bmp.buildMatrix).toHaveBeenCalled();
        });

        it('calls clear when the line begins with C', function () {
            spyOn(bmp, 'clear');
            bmp.lineHandler('c');
            expect(bmp.clear).toHaveBeenCalled();
        });

        xit('calls print if the line begins with S', function () {

        });
    });

    describe('Method: buildMatrix', function () {

    });
});
