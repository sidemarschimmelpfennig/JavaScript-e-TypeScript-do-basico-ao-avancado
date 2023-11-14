//Funçoes Básico
function Saudação(nome){
    console.log(`Ola mundo para o  : ${nome}`)
}
Saudação("Mario")
//function 
function Soma(num1 = "" , num2 = ""){
    if(num1 === "" && num2 === "") {
        return "Cálculo inválido"
    }
    const some = num1 + num2
    return some
    //tudo abaixo de return nao é executado
}
//arrow function
console.log(Soma())
const Raiz = (n) => n ** 0.5 

console.log(Raiz(9))