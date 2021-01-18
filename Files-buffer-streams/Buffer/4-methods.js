const buffer = Buffer.from('Albert Einstein')

if (buffer.includes('Albert')) {
  console.log(`"${buffer.toString()}" includes "Albert"`);
}

const position = buffer.indexOf('Albert')
console.log(`Index of "Albert" is ${position}`);

console.log(`Slice 3-5 "${buffer.slice(3, 6)}"`);
