const falar = {
    falar(){
        console.log(`${this.nome} esta falando.`)
    },
}
const comer = {
    comer(){
        console.log(`${this.nome} esta comendo.`)
    },
}
const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo.`)
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber)

function criaPessoa (nome, sobrenome){
    /*const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} esta falando.`)
        },
        comer(){
            console.log(`${this.nome} esta comendo.`)
        },
        beber(){
            console.log(`${this.nome} esta bebendo.`)
        }
    }*/
    return Object.create(pessoaPrototype, {
        nome : {value : nome},
        sobrenome : {value : sobrenome}
    })
}

const p1 = criaPessoa('Joao', 'Paulo') 

console.log(p1.falar())