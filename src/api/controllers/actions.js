'use strict'

let functions = require('../../functions')
let taskapi = require('../../svlo-api.js')

exports.list = function (req, res) {
  let userid = functions.verifyUserName(req.result.body.parameters.any) || 'all'
  let channelid = functions.verifyChannelName(req.result.body.parameters.any) || 'all'
  taskapi.showAllTasks(function (err, tasks) {
    if (!err) {
      let usertasks = functions.filterTasks('channelid', functions.filterTasks('responsibleid', tasks, userid), channelid)
      let sorted = functions.sortTasks(functions.sortTasks(usertasks, 'deadline'), 'channelid')
      let formated = functions.formatTasks(sorted)
      res.json({
        speech: formated
      })
    } else {
      console.log('taskapi error!')
      res.end()
    }
  })
}
