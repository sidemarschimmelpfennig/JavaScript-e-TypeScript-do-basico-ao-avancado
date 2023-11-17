//IIFE Immediately invoked fuction expression

/*
diferente dessa a funçao abaixo entre parenteses nao acessa o escopo global
function Exe (){
    console.log('Exe')
}
Exe()
*/


(function(){
    function criaNome(){
        const nome = 'Sidemar'
        return nome
    }
    function criaSegundoNome (){
        const segundoNome = 'Junior'
        return segundoNome
    }
    console.log(criaNome(),'', criaSegundoNome())
}   
)()