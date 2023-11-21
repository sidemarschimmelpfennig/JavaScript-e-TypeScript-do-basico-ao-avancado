//foreach so pode ser iterado dentro de arrays

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

    for(let value of numeros){
        console.log(value)
    }

   // numeros.forEach((valor, indice, array) => {
   //     console.log(valor, indice)
   // })

    let total = 0    
    numeros.forEach(valor => {
        total += valor
    })
    console.log(total)
    