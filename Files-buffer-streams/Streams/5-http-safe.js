const fs = require('fs')
const zlib = require('zlib')
const http = require('http')

const prepareCache = callback => {
  let buffer = null

  const readStream = fs.createReadStream('site.html')
  const gzipStream = zlib.createGzip()

  const buffers = []

  gzipStream.on('data', buffer => {
    buffers.push(buffer)
  })
  
  gzipStream.once('end', () => {
    buffer = Buffer.concat(buffers)
    if (callback) {
      callback(null, buffer)
      callback = null
    }
  })

  readStream.on('error', err => {
    if (callback) {
      callback(err)
      callback = null
    }
  })

  gzipStream.on('error', err => {
    if (callback) {
      callback(err)
      callback = null
    }
  })

  readStream.pipe(gzipStream)
}

const startServer = (err, buffer) => {
  if (err) throw err

  const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, { 'Content-Encoding': 'gzip' })
    res.end(buffer)
  })

  server.listen(8000)
}

prepareCache(startServer)
