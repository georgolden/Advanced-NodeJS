const fs = require('fs')

const readStream = fs.createReadStream('shock.pdf', 'utf8')

// readStream.on('readable', () => {
//   console.log('readable');
//   // const buffer = readStream.read()
//   // if (buffer) {
//   //   console.log(buffer);
//   // }
// })

readStream.on('data', chunk => {
  console.log('data');
  // console.log(chunk);
})
