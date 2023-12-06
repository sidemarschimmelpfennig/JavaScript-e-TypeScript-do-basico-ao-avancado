//filter map e reduce juntos 

const numeros  = [5, 50, 100, 10, 80, 90, 10010, 1, 60]
const pessoas = [
    {
        nome: 'Sidemar',
        idade : 20,
    },{
        nome: 'Paulo',
        idade : 30,
    },
    {
        nome: 'Augusto',
        idade : 40,
    },
    {
        nome: 'Luana',
        idade : 45,
    },
    {
        nome: 'Joana',
        idade : 50,
    },
    {
        nome: 'Eduarda',
        idade : 10,
    },
    
    ]

//filter , map e reduce na mesma operaçao fazendo a soma do dobro de todos pares
const numerosPares = numeros.filter(valor => valor % 2 === 0).map(obj => obj * 2).reduce((ac,value) => ac + value)

console.log(numerosPares)