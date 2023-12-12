
exports.pageTestes = (req, res) =>{
        //profile/3
    console.log(req.params)
        //profile?chave=valor&chave=valor
    console.log(req.query)
    res.send('Teste Concluido')
}



module.exports = exports