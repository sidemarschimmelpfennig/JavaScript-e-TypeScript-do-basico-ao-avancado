// literal  sao objetos que tem construtores 

const pessoa = {
    nome : 'Sidemar',
    sobrenome : 'Junior',
    
}


console.log(pessoa.nome)
console.log(pessoa['nome']) //mesma coisa que .nome
console.log(pessoa.sobrenome)
console.log(pessoa['sobrenome'])


const pessoa1 = new Object()

pessoa1.nome = 'Joao'
pessoa1.sobrenome = 'Paulo'
pessoa1.idade = 25
pessoa1.falarnome = function(){
    return (`${this.nome} esta online`)
}
pessoa1.getDataNascimento = function(){
    const dataHoje = new Date()
    return dataHoje.getFullYear() - this.idade
}

console.log(pessoa1)
pessoa1.falarnome()
console.log(pessoa1.getDataNascimento())

function criaPessoa (nome, sobrenome){
    
    return{
    nome,
    sobrenome,
    get nomeCompleto(){
        return (nome + ' ' + sobrenome)
    } 
}

}


function People (nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    Object.freeze(this)
}

const p1 = new People('sidemar', 'junior')

console.log(p1)