const nome = 'Sidemar'
const sobrenome = 'Junior'
const idade = 25

export default function soma(x, y) {
    return x + y
}

/*export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}*/
export {nome, sobrenome, idade as idadeJovem, soma}