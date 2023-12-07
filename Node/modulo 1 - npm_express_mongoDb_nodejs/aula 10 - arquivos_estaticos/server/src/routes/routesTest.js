const route = require('express').Router()
const { pageTestes } = require('../controllers/testController')


route.get('/', pageTestes)

module.exports = route