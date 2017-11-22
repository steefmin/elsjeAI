'use strict'
module.exports = function (app) {
  var action = require('../controllers/controller')

  // todoList Routes
  app.post('/list', action.list)

  app.get('/', action.home)
}
