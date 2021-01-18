const buffer = Buffer.from('Konstantin')

for (const char of buffer.values()) {
  console.log({ char });
}

for (const [index, code] of buffer.entries()) {
  const char = String.fromCharCode(code)
  console.log({ index, code, char });
}
