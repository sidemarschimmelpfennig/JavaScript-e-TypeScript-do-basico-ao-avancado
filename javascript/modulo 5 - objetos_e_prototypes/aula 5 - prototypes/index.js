function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
   // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome
}

//instancias 
const pessoa1 = new Pessoa('Sidemar','Junior')
const pessoa2 = new Pessoa('matheus' , 'augusto')
pessoa1.nomeCompleto()
console.log(pessoa1,pessoa2, pessoa1.nomeCompleto())

