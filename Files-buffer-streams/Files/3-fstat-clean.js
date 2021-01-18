const fs = require('fs')

const files = ['input.txt', 'untitled.js', '1-async-rw.js', 'output.txt']
const stats = new Array(files.length)
const maxIndex = files.length - 1

const printResult = () => {
  console.dir({ stats })
}

const addToStats = (file, i, err, stat) => {
  if (err) {
    console.log(`File ${file} not found`);      
  } else {
    stats[i] = stat
  }
  if (i === maxIndex) printResult()
}

const iterate = (file, i) => {
  console.dir({ file, i })
  const callback = addToStats.bind(null, file, i)
  fs.lstat(file, callback)
}

files.forEach(iterate)
