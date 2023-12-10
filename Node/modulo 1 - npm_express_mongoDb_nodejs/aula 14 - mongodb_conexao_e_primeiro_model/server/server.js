require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.CONNECT).then(()=>{
    console.log('base conectada')
    app.emit('pronto')
})

const path = require('path')
const routes = require('./src/routes')


app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)


app.on('pronto',()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`rodando na porta http://localhost:${process.env.PORT}/`)
    })
})

