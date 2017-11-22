'use strict'
let router = require('express').Router()

let action = require('../controllers/controller')

router.post('/list', action.list)
router.get('/', action.home)

module.exports = router
