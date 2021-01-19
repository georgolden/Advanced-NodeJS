
const topTen = (arr, subject) => {
  return arr.filter(el => el.subject === subject).sort((a, b) => {
    if (a.score > b.score) return -1
    if (a.score < b.score) return 1
    return 0
  }).slice(0, 9)
}

module.exports = topTen
