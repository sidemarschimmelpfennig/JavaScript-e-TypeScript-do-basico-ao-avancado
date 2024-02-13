/*
FOR IN ***************
ele le os indices ou chaves do objeto
*/

const frutas = ['abacaxi', 'morango', 'manga' , 'uva', 'pessêgo'];
for(let i in frutas){
    console.log(frutas[i])
}
/*
For Normal
for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(element)
    
}*/

const Pessoa = {
    nome : 'Sidemar',
    sobrenome : 'Junior',
    idade : 25
}

for (let chaves in Pessoa){
    console.log(chaves ,':',Pessoa[chaves])
}
