//Map 

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

//const callbackFilter = numeros.map((valor, indice, arrayCompleto) => valor > 10 )

const numeroDobrado = numeros.map((num) => `Dobro : ${num*2}, Original : ${num}`)

const adicionaId = pessoas.map((obj, i) => {
    const newObj = {...obj};
    newObj.id = i;  
    return newObj;
})

const nomePessoa = pessoas.map( obj => obj.nome)
const removerChaveNome = pessoas.map( obj => ({idade : obj.idade}) )
console.log(numeroDobrado)
console.log(nomePessoa)
console.log(removerChaveNome)
console.log(adicionaId)