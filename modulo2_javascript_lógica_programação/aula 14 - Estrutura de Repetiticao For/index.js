/*
ESTRUTURA DE REPETICAO FOR *************


*/

//classico

/*for (let index = 0; index <= 5; index++) {
    console.log(`Linha ${index}`)
}
console.log('')
const value = [0,1,2,3,4,5]
for (let index = 0; index < value.length; index++) {
    const element = value[index];
    console.log(`Linha ${element}`)
}*/

for (let i = 0 ; i <= 100; i++){
    const Par = (i % 2) === 0
    Par ? console.log(`O  numero ${i} é par`) : console.log(`O  numero ${i} é impar`)
}
