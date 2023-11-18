//Funçao construtora ou Constructor Function
//na funçao construtora voce muda a conveçao de escrita da funçao como Pessoa e inicia com new

function Pessoa(nome, sobrenome){
    //atributos ou metodos privados
    const privada = 111000;
    let privates = '';
    const metodoInterno = ()=>{

    }
    //atributos ou metodos publicos
    this.nome = nome,
    this.sobrenome = sobrenome,

    this.metodo = function () {

    }
}

const people = new Pessoa('Joao', 'Paulo')

console.log(people.nome, people.sobrenome)