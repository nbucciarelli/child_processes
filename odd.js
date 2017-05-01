const exec = require('child_process').exec

module.exports = (callback) => {
  exec('odd', (err) => {
    callback('odd')
  })
}
