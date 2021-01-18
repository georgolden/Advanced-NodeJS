// buffer from data

const bufferFromArray = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(bufferFromArray);

const bufferFromString = Buffer.from('This is a string for Büffer')

console.log(bufferFromString.toString('hex'));
console.log(bufferFromString.toString('base64'));
console.log(bufferFromString.toString('utf8'));
console.log(bufferFromString.toString('binary'));
