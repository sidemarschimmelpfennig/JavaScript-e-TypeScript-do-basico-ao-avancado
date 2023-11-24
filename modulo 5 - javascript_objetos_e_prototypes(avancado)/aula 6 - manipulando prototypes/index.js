//new Object -> Object.protype

const objectA = {
    chaveA : 'A' 
    //__proto__ : Object.prototype

}


const objectB = {
    chaveA : 'B'
}
//new Object -> objectA -> Object.protype
Object.setPrototypeOf(objectB, objectA)
//Object.getPrototypeOf() // seleciona 

function Produto (nome, preco){
    this.nome = nome 
    this.preco = preco
}

Produto.prototype.desconto  = function (percent){
    this.preco = this.preco - (this.preco * (percent / 100))
}
Produto.prototype.aumento = function (percent){
    this.preco = this.preco + (this.preco * (percent / 100))
}

p1 = new Produto('camisa', 51)
const p2 = {
    nome : 'Joao',
    preco : 25
}
Object.setPrototypeOf(p2, Produto.prototype)
//p1.desconto(100)
p1.aumento(50)
console.log(p1)

p2.aumento(10)
console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco : {
        writable : true,
        configurable : true,
        enumerable : true,
        value : 100
    },
    tamanho : {
        writable : true,
        configurable : true,
        enumerable : true,
        value : 45
    }
})

p3.aumento(15)

console.log(p3)