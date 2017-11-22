'use strict'
module.exports = function (app) {
  var action = require('../controllers/controller')

  // application Routes
  app.post('/list', action.list)

  app.get('/', action.home)
}
