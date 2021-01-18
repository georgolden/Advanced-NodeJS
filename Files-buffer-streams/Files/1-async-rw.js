const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, buffer) => {
  if (err) throw err
  
  console.log('File size: ' + buffer.length);
  
  const src = buffer.toString();
  const lines = src.split('\n').filter(line => !!line)
  const content = lines.join('\n');

  fs.writeFile('output.txt', content, err => {
    if (err) throw err
    console.log('New file size: ' + content.length);
  })
})

console.log('Read / Write file async example');
