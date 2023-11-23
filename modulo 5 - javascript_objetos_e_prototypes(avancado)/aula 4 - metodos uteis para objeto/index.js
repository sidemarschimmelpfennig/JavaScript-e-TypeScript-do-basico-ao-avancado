
/*
*Object.values // retorna valores 
*Object.entries // retorna chaves e valores
*Object.assign(des, any) // copia objeto
*Object.getOwnPropertyDescription(o, 'prop') // mostra o defineProperty
...(spread) // copia os valores do objeto

Visto anteriormente : 
*Object.keys(retorna as chaves)
*Object.freeze(congela o objeto)
*Object.defineProperties (define varias propriedades)
*Object.defineProperty (define uma propriedade)
*/

const produtos = {nome : 'Caneca', preco : 50} 
const outraCoisa = {...produtos}
const caneca = Object.assign({}, produtos, {material : 'porcelana'} )
outraCoisa.nome = 'teste'
console.log(produtos)
console.log(outraCoisa)
console.log(caneca)
const produto = produtos
Object.defineProperty(produto , 'nome',{
    writable : false,
    configurable : false
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
produto.nome = 'teste'
console.log(produto)

console.log(Object.values(produto)) //cria um array para os valor so valores
console.log(Object.entries(produto))//cria um array com chave e valor para cada chave gerada

for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}