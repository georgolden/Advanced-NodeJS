const fs = require('fs')

let buffer

const load = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    buffer = data
    console.log('\x1Bc'); // clear terminal
    console.log('Buffer length: ' + buffer.length);
    console.log(buffer.toString());
  })
}

const watch = path => {
  fs.watch(path, (event, file) => {

    load(path)
    // console.log({ event, file })
  })
}

const path = '5-autoreload.js'
load(path)
watch(path)
