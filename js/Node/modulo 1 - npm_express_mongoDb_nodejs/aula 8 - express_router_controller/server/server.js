const express = require('express')
const app = express()
const routes = require('./routes')
/*
exemplos ********************* 
req.query:
** http://localhost:3000/profile/123?campanha=googleads&&campanha=123
sao chave = valor
somente separados por && comercial 

req.params : 
******* parametro obrigatorio
    http://localhost:3000/:profile/:para ...
***** parametro pode oou nao ser recebido para isso voce deve fazer a rota assim :
    http://localhost:3000/:profile?/:para? ...


*/
app.use(routes)
//serve para que quando for postado algo ele ja envie em um objeto
app.use(express.urlencoded({extended: true}))

const PORT = 3000
app.listen(PORT)