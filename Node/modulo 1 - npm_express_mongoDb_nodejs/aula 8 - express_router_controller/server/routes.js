const express = require('express')
const homeController = require('./controllers/homeController')
const testController = require('./controllers/testController')
const route = express.Router()


route.get('/testes' , testController.pageTestes )
route.get('/', homeController.pageHome )
route.post('/', homeController.respostaTestes)

module.exports = route