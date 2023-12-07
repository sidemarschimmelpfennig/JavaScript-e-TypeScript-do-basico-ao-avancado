const mod1 = require('./mod1')
const multiplicacao = require('./mod2')

module.expoxts = class Cachoro {
    constructor (nome) {
        this.nome = nome
    }
    teste (){
        return nome
    } 
}


console.log(multiplicacao(1,3))
console.log(mod1.falaNome)
console.log(__filename) // nome do arquivo 
console.log(__dirname) // nome do diretorio 


//modulo path

const path = require('path')
//volta pastas do diretorio atual eentra em pastas
path.resolve(__dirname, '..', '..', '..', 'javascript','modulo 1 - iniciante_basico', 'aula 1 - strings', 'index.js')