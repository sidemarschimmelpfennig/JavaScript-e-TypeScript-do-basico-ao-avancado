const pessoa = {
    nome : 'Sidemar',
    sobrenome : 'Schimmelpfennig Junior',
    idade : 25,
    endereco : {
        rua : 'Rua eduino mutzemberg',
        numero: 78,
        bairo : 'centro'
    }
}
//atribuiçao com desestruturaçao normal
const {nome, sobrenome, idade} = pessoa
console.log(`Olá sou ${nome} ${sobrenome}, tenho ${idade} anos`)
//atribuiçao com desestruturaçao  e substuiçao de nome da chave
const {nome : nome1 , sobrenome : sobrenome1 , idade : idade1} = pessoa
console.log(`"Olá sou ${nome1} ${sobrenome1}, tenho ${idade1} anos"`)
//atribuiçao com desestruturaçao  e substuiçao de nome da chave e encapsulando chave em chave 
const {endereco : {rua, numero},
endereco
} = pessoa

console.log(rua, numero , endereco)

//assim como no array ocorre a questao do ...rest


const {idade : idade2, ...resto} = pessoa

console.log(resto)





