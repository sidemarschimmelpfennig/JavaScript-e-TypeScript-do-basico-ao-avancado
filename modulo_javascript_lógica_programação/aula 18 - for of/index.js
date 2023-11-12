//0123456 ...
/*
FOR OF
objeto iterravel voce pode fazer for of
diferente do in que traz o indice esse traz o valor 
*/
/* 
For padrao ************
const array = ['Name', 'Joao']

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

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