
const numeros  = [5, 50, 100, 10, 80, 90, 10010, 1, 60]

//const callbackFilter = numeros.filter((valor, indice, arrayCompleto) => valor > 10 )

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
const filtro = numeros.filter((valor) => valor > 10
)
console.log(filtro)

const pessoaNomeGrande = pessoas.filter( obj => obj.nome.length > 5) 
const pessoaMaisDeVinte = pessoas.filter( obj => obj.idade > 20) 
const pessoaTerminaComA = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a')) 
console.log(pessoaNomeGrande)
console.log(pessoaMaisDeVinte)
console.log(pessoaTerminaComA)
