/*
WHILE  && DOWHILE *****************************
Estrututura de repetição while e dowhile
vc  deve fazer uma validação que tenha sempre 
um valor  chegue uma hora a falso senao vc criara um loop infinito


do while  => faça isso entao chque
*/
let i = 0
while(i <= 10){
    console.log(i)
    i++
}


function random ( min, max) {
    const randomic = Math.random() * (max - min) + min;
    return Math.floor(randomic)
}

const min = 1
const max = 50
let rend = random(1, 50)
//console.log(rend)

while (rend !== 49){
    rend = random(min , max)
    console.log(rend)
}

console.log('###########################################')

do{
    rend = random(min , max)
    console.log(rend)
}while(rend !== 49)