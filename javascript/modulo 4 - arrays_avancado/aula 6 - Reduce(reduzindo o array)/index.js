//Reduce
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

    //numeros.reduce((acumulador, valor, indice, array)=>{ },0)

    const total = numeros.reduce((acumulador, valor, indice, array)=>{
        if(valor%2 === 0)acumulador +=  valor
        console.log(valor)
        return acumulador
    }, 0)

    const maisVelho = pessoas.reduce((acumulador, valor)=> acumulador.idade > valor.idade ? acumulador : valor)
    console.log(maisVelho)
    console.log(total)

