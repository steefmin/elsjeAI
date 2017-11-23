'use strict'

let action = require('./actions')

module.exports.type = function (req, res) {
  console.log('this is the POST body:')
  console.log(req.body)
  switch (req.body.result.action) {
    case 'list':
      action.list(req, res)
      break
    default:
      res.json({speech: 'ik snap er geen bal van!'})
  }
}

module.exports.home = function (req, res) {
  res.send("She's alive!!")
}
