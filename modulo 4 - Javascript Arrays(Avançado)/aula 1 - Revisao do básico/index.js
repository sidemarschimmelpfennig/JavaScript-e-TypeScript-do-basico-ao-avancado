//
const nomes  = ['Eduardo' , 'Maria', 'Joao', 'Paulo']

//valido para strings .funcoes, numbers  $$ const nome = new Array('Eduardo' , 'Maria', 'Joao')


const novos = nomes;
//espalhamento
const spred = [...nomes]
//resto da operaçao 
//const rest = [valor, ...nomes]

//delete nomes[2]
const removed = novos.pop()//ambos se equivalem 

console.log(nomes)
console.log(novos, removed)
console.log(spred)
//tamanho do array
console.log(nomes.length)
nomes.push('Paulo')
nomes.unshift('Eduardo')
nomes.unshift('Wallace')
//console.log(rest)
//pop e push muito mais utilizados que as outras
console.log(nomes)
const slice = nomes.slice(0,-1)
console.log(slice)
const nome = 'Sidemar Schimmelpfennig Junior'
const nomenclatura = nome.split(' ')
console.log(nomenclatura)
const unirArray = nomes.join(', ')
console.log(unirArray)