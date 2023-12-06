/*
A segunda letra do seu nome é: ______
Qual o primeiro índice da letra LETRA no seu nome? ______
Qual o último índice da letra LETRA no seu nome? ______
As últimas 3 letras do seu nome são: ______
As palavras do seu nome são: ______
Seu nome com letras maiúsculas: ______
Seu nome com letras minúsculas: ______

*/

const body  = document.body

let nome = prompt('digite seu nome completo?')


body.innerHTML += `Seu nome é : ${nome} </br>`
body.innerHTML += `Seu nome completo tem ${nome.length} letras </br>`
body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${nome[0]} </br>`
body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.slice(-1)} </br>`
body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} </br>`
body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} </br>`
body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} </br>`




