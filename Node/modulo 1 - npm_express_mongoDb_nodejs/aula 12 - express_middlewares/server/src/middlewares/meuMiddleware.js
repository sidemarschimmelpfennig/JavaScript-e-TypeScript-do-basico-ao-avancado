exports.meuMiddlware = async(req, res, next) =>{
    req.session = {nome : 'Sidemar', sobrenome : 'Junior'}
    console.log('Passei nessa Rota')
    next()
}

module.exports = exports