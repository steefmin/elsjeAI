'use strict'
let router = require('express').Router()

let action = require('../controllers/controller')

router.post('/api', action.type)
router.get('/', action.home)

module.exports = router
