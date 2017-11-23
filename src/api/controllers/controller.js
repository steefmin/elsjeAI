'use strict'

let action = require('./actions')

/*
var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');
*/

module.exports.type = function (req, res) {
  switch (req.result.action) {
    case 'list':
      action.list(req, res)
      break
    default:
      res.json({
        speech: 'ik snap hier geen bal van!'
      })
  }
}

module.exports.home = function (req, res) {
  res.send("She's alive!!")
}
