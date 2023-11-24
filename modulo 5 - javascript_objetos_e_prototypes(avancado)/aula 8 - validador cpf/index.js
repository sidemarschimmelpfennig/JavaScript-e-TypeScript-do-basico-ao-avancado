//088.494.769.65
/*

0x  8x 8x 4x 9x 4x 7x 6x 9x
10  9  8  7  6  5  4  3  2 
0  72 64 28 54 20 28 18 18 = 302

//pegar o primeiro numero
11 - (312 % 11) = 6
        5 é o resto da divisao 
        se maior que nove considera-se 0

0x  8x 8x 4x 9x 4x 7x 6x 9x 6x
11  10  9  8  7  6  5  4  3  2 
0   80  72 32 63 24 35 24 27 12 = 324
11 -(324 % 11) = 5
        6
se o o digito for maiaor que 9 igual  a 0
*/

let cpf = '088.494.769.65'
let cpfLimpo = cpf.replace(/\D+/g, '')
console.log(cpfLimpo)

const arr = Array.from(cpfLimpo)
console.log(arr.reduce((ac, val) => ac + Number(val), 0))