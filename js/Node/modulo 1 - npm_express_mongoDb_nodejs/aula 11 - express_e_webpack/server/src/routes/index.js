const route = require('express').Router()
const routesHome = require('./routesHome')
const routesTeste = require('./routesTest')

route.use('/teste' , routesTeste )
route.use('/', routesHome )
module.exports = route