//Objetos Básico
const array = [1,2,3]
array[0] = "luis"
//porem nao é possivel reatribuir exemplo array = "" pois é uma const 
console.log(array)
//objeto literal 
const pessoa1 = {
    nome : "luiz",
    sobrenome: "paulo",
    idade : 25,
    fala (){
        console.log(`${this.nome} ${this.sobrenome} diz : "Hello World!!!"`)
    },
    incrementaIdade(){
       nome1 = ++this.idade
       console.log(nome1)
    }
}
pessoa1.incrementaIdade()
pessoa1.fala()
console.log(pessoa1.nome)
//objeto crido por function

function criaPessoa (nome, sobrenome, idade){
    //valores do objeto com parametro igual ao nome pode ser colocado so uma vez
    return{
         nome,
         sobrenome,
         idade
    }
}
//argumento é o valor passaado ao parametro da function 
const pessoa2 = criaPessoa("Sidemar" , "Junior" ,"25")
console.log(pessoa2.nome)