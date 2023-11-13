//0123456 ...
/*
For of==
objeto iterravel voce pode fazer for of
diferente do in que traz o indice esse traz o valor 
*/
/* 
For classico -  Geralmente com objetos iteraveis (strings ou arrays)
For in - Retorna o indice dou chave (strings, arrays ou objetos)
For of - Retorna o valor em si (iteráveis , arrays  ou strings) que tenham um indice
*/

const nome = ['Joao' , 'Pedro', 'Paul']
console.log('##################################################')
console.log('For default')

for (let i = 0; i < nome.length; i++) {
    const element = nome[i];
    console.log(element)
}
console.log('')
console.log('##################################################')
console.log('For in')
for (let i in nome){
    console.log(nome[i])
}
console.log('')
console.log('##################################################')
console.log('For of')
console.log('')
for (let i of nome){
    console.log(i)
}

console.log('##################################################')
console.log('For Each')
console.log('')
nome.forEach((element)=>{
    console.log(element)
})