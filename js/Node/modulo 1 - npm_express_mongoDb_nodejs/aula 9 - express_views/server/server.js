const express = require('express')
const app = express()
const path = require('path')
const routes = require('./src/routes')


app.use(express.urlencoded({extended: true}))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`rodando na porta http://localhost:${PORT}/`)
})