exports.pageHome = (req, res) =>{
    res.render('home')
}
exports.respostaTestes = (req, res) =>{
    // so pode no post para ter respons
    res.send(`Usuario conectado `)
    
}


