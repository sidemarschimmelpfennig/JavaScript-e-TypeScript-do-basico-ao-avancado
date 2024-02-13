const express = require('express')
const app = express()

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

//serve para que quando for postado algo ele ja envie em um objeto
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send(`
    <header>
    
    </header>
    <nav>
        <ul class="menu">
            <li>Home</li>
            <li>Clientes</li>
            <li>Fornecedores</li>
            <li>Agenda</li>
            <li>Histórico de Transações</li>
        </ul>
    </nav>
    <form action="/" method="POST">
    Nome : <input type="text" name="nome">
    <button>Enviar teste</button>
    </form>
    `)
})
app.post('/',(req,res)=>{
    // so pode no post para ter response
    console.log(req.body)
    res.send(`Usuario conectado : ${req.body.nome}`)
})

app.get('/testes' , (req,res)=>{
    //profile/3
    console.log(req.params)
    //profile?chave=valor&chave=valor
    console.log(req.query)
})


const PORT = 3000
app.listen(PORT)