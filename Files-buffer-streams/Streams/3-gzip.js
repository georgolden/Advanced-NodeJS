const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('shock.pdf')
const writeStream = fs.createWriteStream('output.pdf.gz')
const gzipStream = zlib.createGzip()

readStream.pipe(gzipStream).pipe(writeStream)

readStream.on('end', () => {
  console.log('Done');
})
