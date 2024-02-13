exports.meuMiddleware = (req,res, next) => {
    res.locals.umaVarivavelLocal = 'Esse é o local'
    next()
} 

exports.checkCsrfError = (err , req, res, next) =>{
    if(err && err.code === 'EBADCSRFTOKEN' ){
        return res.render('404')
    }
}

exports.csrfMiddleware = (req,res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

module.exports = exports