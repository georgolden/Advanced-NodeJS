// allocate part of RAM to buffer

// safe alloc - clean that part of RAM
const buffer1 = Buffer.alloc(1024)
console.log(buffer1);

// unsafe alloc - without cleaning RAM
// faster then safe
const buffer2 = Buffer.allocUnsafe(1024)
console.log(buffer2);
