const fs = require('fs');
const path = require('path');

const { Transform } = require('stream');

const readFilePath = path.join(process.cwd(), 'text.txt');
const writeFilePath = path.join(process.cwd(), 'newText.txt');

const readStream = fs.createReadStream(readFilePath);
const writeStream = fs.createWriteStream(writeFilePath);

const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

readStream.pipe(toUpperCase).pipe(writeStream);
