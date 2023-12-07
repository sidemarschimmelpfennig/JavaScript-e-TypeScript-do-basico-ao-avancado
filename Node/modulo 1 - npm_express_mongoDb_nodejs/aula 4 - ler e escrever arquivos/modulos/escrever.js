const fs = require('fs').promises


module.exports.escreveJson = (caminho, dados) =>{
    fs.writeFile(caminho, dados , { flag : 'w' })
}

module.exports.escreveTXT = (caminho, dados) =>{
    fs.writeFile(caminho, dados , { flag : 'a' })
}

//w- substitui
// a -- faz um append adiciona no arquivo 

