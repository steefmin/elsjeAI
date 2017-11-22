'use strict'

let functions = require('../../functions')
let taskapi = require('../../svlo-api.js')

/*
var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');
*/

exports.list = function (req, res) {
  let userid = functions.verifyUserName(req.result.parameters.any) || 'all'
  let channelid = functions.verifyChannelName(req.result.parameters.any) || 'all'
  taskapi.showAllTasks(function (err, tasks) {
    if (!err) {
      let usertasks = functions.filterTasks('channelid', functions.filterTasks('responsibleid', tasks, userid), channelid)
      let sorted = functions.sortTasks(functions.sortTasks(usertasks, 'deadline'), 'channelid')
      let formated = functions.formatTasks(sorted)
      res.json({
        speech: formated,
        displayText: formated
      })
    }
  })
}

exports.home = function (req, res) {
  res.send('testing!!!')
//  res.json({text: 'test'})
}
