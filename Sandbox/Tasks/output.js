const fs = require('fs')

const writeToFile = (resultObj) => {
  const writeStream = fs.createWriteStream('file.json', 'utf8')
  writeStream.write(JSON.stringify(resultObj))
}

module.exports = writeToFile
