const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { cond, always } = require('ramda')

///////////////////////////////////////
// Body parser
///////////////////////////////////////
app.use(bodyParser.json())

///////////////////////////////////////
// Child processes
///////////////////////////////////////
const even = require('./even')
const odd = require('./odd')

///////////////////////////////////////
// Helper functions
///////////////////////////////////////
const isNumber = val => !isNaN(parseFloat(val)) && isFinite(val)
const isEven = num => num % 2 === 0
const isOdd = num => num % 2 > 0
const formatResponse = (string) => {
  return { response: string }
}

///////////////////////////////////////
// Middleware functions
///////////////////////////////////////
const checkNumber = (req, res, next) => {
  if(!isNumber(req.body.number)) {
    res.status(400).send("Bad Request")
  } else {
    next()
  }
}

///////////////////////////////////////
// Routes
///////////////////////////////////////
app.post('/which-child-process', checkNumber, (req, res) => {
  const number = req.body.number
  const evenOdd = cond([
    [isEven, always(even)],
    [isOdd, always(odd)]
  ])(number)
  evenOdd( respOutput => {
    res.send(formatResponse(respOutput))
  })
})

app.all('*', function (req, res) {
  res.status(404)
     .send("Not Found")
})

///////////////////////////////////////
// Start server
///////////////////////////////////////
app.listen(3000, function () {
  console.log('App listening on port 3000')
})
