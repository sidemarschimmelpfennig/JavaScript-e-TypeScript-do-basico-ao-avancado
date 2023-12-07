const route = require('express').Router()

const { pageHome, respostaTestes } = require("../controllers/homeController");

route.post('/', respostaTestes)
route.get('/', pageHome)


module.exports = route