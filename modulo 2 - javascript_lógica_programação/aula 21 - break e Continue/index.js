/*
BREAK e CONTINUE
continue:  pula trechos de codigos
break: se achar a condiçao pare o codigo; 

*/


const numeros = [1,2,3,4,5,6,7,8,9,10];

for(let numero of numeros ){
    if (numero % 2 === 0 || numero === 1){
        continue;
    }
    console.log(numero)
    if (numero === 7){
        break; // apos a condiçao atingida pare
    }
}


