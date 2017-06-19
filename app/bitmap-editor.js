const fs = require('fs');
const readline = require('readline');

exports.run = file => {
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

