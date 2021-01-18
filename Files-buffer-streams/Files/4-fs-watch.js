const fs = require('fs')

fs.watch('input.txt', (event, file) => {
  console.dir({ event, file })
})
// watch to specific file and react to changings around this file
