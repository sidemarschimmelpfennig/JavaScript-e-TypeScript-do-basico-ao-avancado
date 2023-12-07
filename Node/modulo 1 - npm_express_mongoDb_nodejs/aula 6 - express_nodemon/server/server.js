const express = require('express')
const app = express()

//CRUD Create, READ, UPDATE, DELETE
//     POST    GET   PUT   , DELETE    
//http ://meusite.com/ <- GET -> Entregue a pãgina 
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
    res.send('Recebi o Formulário')
})

const PORT = 3000
app.listen(PORT)