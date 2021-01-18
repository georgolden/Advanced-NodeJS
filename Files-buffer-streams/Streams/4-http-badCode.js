const fs = require('fs')
const zlib = require('zlib')
const http = require('http')

const readStream = fs.createReadStream('site.html')
const gzipStream = zlib.createGzip()

const buffers = []
let buffer = null

gzipStream.on('data', buffer => {
  buffers.push(buffer)
})

gzipStream.on('end', () => {
  buffer = Buffer.concat(buffers)
})

readStream.pipe(gzipStream)

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'Content-Encoding': 'gzip' })
  res.end(buffer)
})

server.listen(8000)
