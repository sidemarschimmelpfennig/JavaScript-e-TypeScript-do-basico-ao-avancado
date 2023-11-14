//arrays básico

const arrayExemplo  = ["joao", "maria" , "eduarda"]  

console.log(arrayExemplo[0])
console.log(arrayExemplo[1])
console.log(arrayExemplo[2])
//altera por index
arrayExemplo[0]="Joaozinho"
//adicionar no final
arrayExemplo[3]="Ana"
arrayExemplo[arrayExemplo.length] = "Paulinho"
arrayExemplo.push("Karina")
arrayExemplo.push("Luiz")
console.log(arrayExemplo)
//adiona no começo
arrayExemplo.unshift("Luiza")
console.log(arrayExemplo)
//remover do final e tambem mostra o removido 
const removed = arrayExemplo.pop()
console.log(removed)
console.log(arrayExemplo)
//remove do comeco e mostra o removido
const removedInite= arrayExemplo.shift()
console.log(`do inicio do array foy removido ${removedInite}`)
console.log(arrayExemplo)
//fatiar arrray 
console.log(arrayExemplo.slice(0,3))  //ambos fazem o mesmo fatiamento 
console.log(arrayExemplo.slice(0, -3))
//caso nao exista é undefined
//tipo
console.log( typeof arrayExemplo)
//é array verifica se é um array e retorna um valor boolean
console.log( arrayExemplo instanceof Array)


