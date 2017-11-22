'use strict'
module.exports = function (app) {
  var action = require('../controllers/controller')

  // todoList Routes
  app.route('/list')
    .post(action.list)

  app.route('/')
    .get(action.home)
}
