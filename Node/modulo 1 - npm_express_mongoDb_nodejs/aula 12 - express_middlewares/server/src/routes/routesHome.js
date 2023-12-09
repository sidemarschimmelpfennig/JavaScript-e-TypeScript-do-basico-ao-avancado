const route = require('express').Router()
const {meuMiddlware} = require('../middlewares/meuMiddleware')
const { pageHome, respostaTestes } = require("../controllers/homeController");

route.post('/', meuMiddlware , respostaTestes)
route.get('/', meuMiddlware , pageHome)


module.exports = route