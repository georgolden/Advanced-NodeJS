

api.console.log('From application1 global context')

module.exports = () => {
  api.fs.readFile('../../example.txt', (err, data) => {
    if (err) {
      api.console.log(err.message)
      return
    }
    api.console.log(data.toString())
  })

  api.timers.setTimeout(() => {
    api.console.log('From application1 exported function')
  }, 5000);
}
