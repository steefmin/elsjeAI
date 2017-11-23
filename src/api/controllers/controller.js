'use strict'

let action = require('./actions')

module.exports.type = function (req, res) {
  let message
  console.log(req.body)
  switch (req.body.result.action) {
    case 'list':
      message = action.list(req)
      break
    default:
      message = 'ik snap er geen bal van!'
  }
  res.json({
    speech: message
  })
}

module.exports.home = function (req, res) {
  res.send("She's alive!!")
}
