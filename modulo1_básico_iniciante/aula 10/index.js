//Objeto math
let numOne = 9.545789
//aredondar para baixo
let numTwo =  Math.floor(numOne)
console.log(numTwo)
 //aredondar para cima
let numTree = Math.ceil(numOne)
console.log(numTree)
//numero arredondado para o mais proximo
let numRound = Math.round(numOne)
console.log(numRound)
//numero máximo de um array 
console.log(Math.max(1,22,33,55,-15,1200,20000,5,17))
//numero minimo de um array 
console.log(Math.min(1,22,33,55,-15,1200,20000,5,17))
//gera um numero randomico aleatorio entre 0 e 1 porem o 1 nunca é incluido
console.log(Math.random())
//numero randomico entre 10 e 5 
const aleatorio = Math.round(Math.random() * (10 - 5) + 5)
console.log(aleatorio)
//potenciacao
console.log(Math.pow(2,10))
console.log(2**10)
//raiz quadrada
console.log(9 ** 0.5)
//dado infinity porem nos boleanos ele é true
console.log(100/ 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001)