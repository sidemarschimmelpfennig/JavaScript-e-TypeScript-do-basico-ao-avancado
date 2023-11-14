//Mais sobre strings

//metodo de aspas duplas que dentro pode receber aspas simples
let strings = "uma string e um texto"
console.log(strings)
//selecionado como um array por letra , so é valido para o tamanho da string em um array senao ocorre erro 
console.log(strings[4])
//verifica elemento por posicão porem sem retorno de erro retorna vazio
console.log(strings.charAt(20))
//concatenação  de strings porem isso pode ser feito com template strings
console.log(strings.concat(' ','em', ' ', 'um', ' ', 'concat' )) //ou
console.log(`${strings} em um concat`)
//buscar indice de uma palavra caso nao encontre o retorno é -1
console.log(strings.indexOf('texto'))
//pode ser feito dessa maneira tambem  buscando se existe tal strin em ate tal posição
console.log(strings.indexOf('o', 3))
//começa a busca ao contrario unica diferença do acima
console.log(strings.lastIndexOf('o', 3))
// busca por expressoes regulares com a flag g 
console.log(strings.match(/[a-z]/g))
//e tambem temos o search  para busca
console.log(strings.search(/[a-z]/g))
//replace para substituiçao
console.log(strings.replace(/uma/ , 'Outra'))
//tamanho em caracteres porem nao utiliza o indice 0
console.log(strings.length)
//faz a fatiaçao de um trecho de string ondde vc coloca inicio e fim colocando +1 no valor final para puxar o texto completo
console.log(strings.slice(4,10))
//substring desconta um caractere do trecho de codigo
console.log(strings.slice(4,-1)) //ouu
console.log(strings.substring(strings.length - 4, strings.length -1 ))
//metodo para colocar aspas duplas dentro de aspas duplas 
strings = "uma string e um \"texto\" "
console.log(strings)
//strings todas maiusculas
console.log(strings.toUpperCase())
//strings todas minisculas
console.log(strings.toLowerCase())
// cria um array baseado nos resultados 
console.log(strings.split(' '))



//metodo  de aspas simples que dentro pode receber aspas duplas 
strings = 'uma string e um "texto"'
console.log(strings)

//metodo  de template string  que dentro pode receber aspas duplas aspas simples e tambem variaveis e pode ser escrito em multiplas linhas é diferenciado dos demais 
const teste = "teste"
strings = `uma 'string' e ${teste} um "texto" `
console.log(strings)

