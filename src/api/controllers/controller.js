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
  taskapi.showAllTasks(function (err, tasks){
    let usertasks = functions.filterTasks('channelid', functions.filterTasks('responsibleid', tasks, userName), channelName)
    let sorted = functions.sortTasks(functions.sortTasks(usertasks, 'deadline'), 'channelid')
    let formated = functions.formatTasks(sorted)
    res.json({
      speech: formated,
      displayText: formated
    })
  }
}
