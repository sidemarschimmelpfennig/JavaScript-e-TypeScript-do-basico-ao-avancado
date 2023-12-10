const HomeModel = require('../model/HomeModel')
//mudando para find() ele localiza o todos os dados
HomeModel.create({
    titulo : 'um titulo aleatorio',
    descricao : 'Uma descricao de teste'
})
.then(dados => console.log(dados))
.catch(e => console.log(e))

exports.pageHome = (req, res) =>{
    res.render('index')
}
exports.respostaTestes = (req, res) =>{
    // so pode no post para ter respons
    res.send(`Usuario conectado `)
    
}


