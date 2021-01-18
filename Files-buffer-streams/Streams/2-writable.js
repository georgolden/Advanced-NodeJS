const fs = require('fs')

const readStream = fs.createReadStream('shock.pdf')
const writeStream = fs.createWriteStream('output.pdf')

// readStream.on('data', buffer => {
//   console.log('Copy ' + buffer.length + 'chars');
//   writeStream.write(buffer)
// })
readStream.pipe(writeStream)

readStream.on('end', () => {
  console.log('Done');
})
