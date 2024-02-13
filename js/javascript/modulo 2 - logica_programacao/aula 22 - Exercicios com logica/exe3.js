//escreva uma funçao que recebe um  numero e
//retorne o seguinte : 
// Numero é divisivel por 3 
// Numero é divido por 5 =  Buzz 
// Numero é divisivel por tres e 5 = FizzBuzz
// numero nao é divisivel  por retorna o numero
// checar se é realmente um numero 

const FizzBuzz = (number) =>{
    if (!Number(number))return 'Erro isso não é um número'
    if (number%3 === 0 && number%5 === 0)return 'FizzBuzz'
    if (number%3 === 0)return 'Fizz'
    return number%5===0 ? 'Buzz':number
}


console.log(FizzBuzz('hfhkfdss'))
console.log(FizzBuzz(29))

for(i = 0 ; i <= 100 ; i ++){
    console.log(i,FizzBuzz(i))
}