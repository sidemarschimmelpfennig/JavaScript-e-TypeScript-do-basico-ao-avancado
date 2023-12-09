exports.pageHome = (req, res, next) =>{
    res.render('index')
    console.log(`Olha o que tem na req.session.nome : ${req.session.nome}`)
    next()
}
exports.respostaTestes = (req, res) =>{
    // so pode no post para ter respons
    res.send(`Usuario conectado `)
    
}


