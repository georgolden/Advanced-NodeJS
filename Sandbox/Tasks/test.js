
const createCourseCard = (id) => {
  const result = {}
  result.id = id
  result.name = 'course' + id
  result.score = randomScore()
  result.subject = randomSubject()
  return result
}
const randomScore = () => {
  return Math.floor(Math.random() * 100) / 10
}

const randomSubject = () => {
  let i = Math.floor(Math.random() * 4)
  const subjects = ['Maths', 'Backend', 'Frontend', 'DevOps']
  return subjects[i]
}

const generateArr = (len) => {
  let arr = []

  for (let i = 0; i < len; i++) {
    arr[i] = createCourseCard(i)
  }

  return arr
}

const test = { test: generateArr(100), subject: randomSubject() }

module.exports = test
