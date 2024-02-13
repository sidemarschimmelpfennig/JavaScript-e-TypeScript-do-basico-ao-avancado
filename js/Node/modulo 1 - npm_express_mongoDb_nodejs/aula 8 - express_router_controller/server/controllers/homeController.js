exports.pageHome = (req, res) =>{
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
}
exports.respostaTestes = (req, res) =>{
    // so pode no post para ter respons
    res.send(`Usuario conectado `)
    
}


