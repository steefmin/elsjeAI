'use strict'

let functions = require('../../functions')
let taskapi = require('../../svlo-api.js')

/*
var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');
*/

module.exports.list = function (req, res) {
  let userid, channelid
  if (isDefined(req.results)) {
    userid = isDefined(req.results.parameters.any) ? functions.verifyUserName(req.result.parameters.any) || 'all' : 'all'
    channelid = isDefined(req.results.parameters.any) ? functions.verifyChannelName(req.result.parameters.any) || 'all' : 'all'
  } else {
    userid = 'all'
    channelid = 'all'
  }
  taskapi.showAllTasks(function (err, tasks) {
    if (!err) {
      let usertasks = functions.filterTasks('channelid', functions.filterTasks('responsibleid', tasks, userid), channelid)
      let sorted = functions.sortTasks(functions.sortTasks(usertasks, 'deadline'), 'channelid')
      let formated = functions.formatTasks(sorted)
      res.json({
        speech: formated,
        displayText: formated
      })
    } else {
      console.log('taskapi error!')
    }
  })
}

module.exports.home = function (req, res) {
  res.send('testing!!!')
//  res.json({text: 'test'})
}

function isDefined (obj) {
  return typeof obj !== 'undefined'
}
