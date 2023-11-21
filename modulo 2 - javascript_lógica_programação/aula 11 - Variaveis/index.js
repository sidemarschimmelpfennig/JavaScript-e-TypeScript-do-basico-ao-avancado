/*
DIFERENÇAS ENTRE VARIAVEIS E CONSTANTES
let  tem escopo de bloco {...bloco}
var so tem escopo de funcao  e toda vez redeclara somente tem o escopo de funcao 

*/

const verdadeiro  = true
let nome = 'Side'
var nome2 = 'Side'

if (verdadeiro){
    let nome = 'Junior'//aninhamento
    console.log(nome, nome2)
    if(verdadeiro){
        var nome2 = "teste"//redeclara ou seja muda o resultado global 
        let nome = 'OK' // bloco aninhado 
        console.log(nome)
    }
}

function nomeDeFuncao (){

    //posso chamar uma variavel de fora aqui
    // dentro porem uma variavel para fora nao é possivel mesmo var
    var nomeDeFuncao = "teste"
    return nomeDeFuncao
}
console.log(nomeDeFuncao())