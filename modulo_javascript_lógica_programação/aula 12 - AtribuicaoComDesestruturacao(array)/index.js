/*
ATRIBUIÇAO VIA DESESTRUTURAÇÃO DE ARRAY 


Exemplo  :
let a = 'A';
let b = 'B';
let c = 'C';

const letras=[b, c, a];
[a, b, c] = letras;

console.log(a, b, c)

*/

const numeros  = [1,2,3,4,5,6,7];

const [primeiroNumero , segundoNumero] = numeros;

console.log(primeiroNumero)

//pegar o resto ...rest || ...spred
const [primeiroN , segundoN, ...resto] = numeros;
console.log(primeiroN, segundoN)
console.log(resto)
//voce pode pular valors colocando espacos em branco 

const [espaceUM, ,espaceTres, ,espaceCinco] = numeros; 

console.log(espaceUM, espaceTres, espaceCinco)


const numerosArray = [
    [ 1 , 2 , 3 ],
    [ 4 , 5 , 6 ],  // necessario passar primeiro o indicide de fora após isso o interno
    [ 7 , 8 , 9 ]
]
                        
console.log(numerosArray[1][2])

const [,[,,seis]] = numerosArray;

console.log(seis)