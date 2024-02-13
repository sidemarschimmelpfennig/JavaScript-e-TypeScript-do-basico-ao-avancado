
exports.pageHome = (req, res) =>{
    //req.session.user = {nome : sidemar , logado : true}
    req.flash('info', 'Voce esta logado')
    req.flash('error', 'erro hdsjkf')
    req.flash('success', 'erro hdsjkf')
    console.log(req.flash('success'))
    res.render('index')
    return
}
exports.respostaTestes = (req, res) =>{
    // so pode no post para ter respons
    res.send(`Usuario conectado `)
    
}


