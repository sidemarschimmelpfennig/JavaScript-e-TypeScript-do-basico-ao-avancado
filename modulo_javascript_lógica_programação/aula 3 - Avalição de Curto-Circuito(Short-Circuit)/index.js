//Avaliação de curto circuito (Short-Circuit)
/*
Ao achar uma expressão que avalia em falso ele retorna o "valor" mesmo 
caso verdadeiro retorna a ultima verdadeira.
FALSY
*false
0
"" '' ```
null/undefined 
NaN
*/

console.log('short' && '' && 'circuit')
console.log('short' && 'circuit' && NaN )
console.log('short' && 'circuit' && 0 )

const falaOi = () => "Oi"

const vaiExecutar = false
const Execute = "Teste"

console.log(vaiExecutar && falaOi())
console.log(Execute && falaOi())

console.log(0 || undefined|| Execute || falaOi())