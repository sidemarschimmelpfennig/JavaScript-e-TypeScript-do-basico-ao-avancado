/*Luiz Otávio Miranda tem 30 anos , pesa 84 Kg teste
tem  1.8 de altura e seu IMC é de 25.92...*/

const nome = prompt("Qual seu nome ?") 
const idade = prompt("Qual sua idade")
const peso = prompt("Qual seu peso ?")
const altura = prompt("Qual sua Altura ?")

const IMC = ((peso  * peso)/altura)

console.log(`${nome} tem ${idade} anos , pesa ${peso} Kg 
    tem  ${altura} de altura e seu IMC é de ${IMC}`)

alert(`${nome} tem ${idade} anos , pesa ${peso} Kg 
 tem  ${altura} de altura e seu IMC é de ${IMC}`)