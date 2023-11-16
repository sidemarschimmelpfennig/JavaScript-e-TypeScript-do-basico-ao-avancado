//closures e a habilidade que a funçao tem de acessar seu escopo lexico
//retorno a tres escopos o global o interno e o e o da funcao de retorno 
function retornaFuncao(nome){
    return function (){
        return nome
    }

}
//o valor sempre vai ser o passado
const funcao = retornaFuncao('Sidemar')


console.dir(funcao)