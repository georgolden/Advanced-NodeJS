// we can concatinate buffers to one BIG DADDY BUFFER

const b1 = Buffer.from([50, 51, 52, 53, 54, 55])
const b2 = Buffer.from([56, 57, 58])
const b3 = Buffer.alloc(10).fill('A')

const daddyBuffer = Buffer.concat([b1, b2, b3])

console.log(daddyBuffer);
console.log(daddyBuffer.toString());
