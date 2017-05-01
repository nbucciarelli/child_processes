const exec = require('child_process').exec

module.exports = (callback) => {
  exec('even', (err) => {
    callback('even')
  })
}
