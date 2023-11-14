//declaracao de funçao (Function hoisting)
//falaOi()


/*
Função Normal
function falaOi(){
    console.log('oi')
}*/

//first Class Object (Objeto de primeira classe)
//function expression
const fale = function(funcao){
    console.log("execute a funçao abaixo")
    funcao()
}
//arrow function
//diverença entre a function e arrow function com o uso do this
const falaOi = () =>{
    console.log("sou um dado")
}


fale(falaOi)