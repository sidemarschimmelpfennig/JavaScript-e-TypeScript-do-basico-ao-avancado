const nome = 'junior'
const obj = {...nome}
const newObj = {...obj}
const newwObj = {...newObj}

console.log(newObj)
console.log(obj)
console.log(newwObj)

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

//npx babel (arquivo origem) -o (arquivo destino) --presets=@babel/env