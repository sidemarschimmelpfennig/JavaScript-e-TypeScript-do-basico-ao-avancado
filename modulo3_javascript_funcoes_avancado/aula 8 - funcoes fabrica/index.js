//Factory functions 

function criaPessoa (nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //set para setar atributo setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        fala(assunto){
            return `${this.nomeCompleto}  seu ${assunto} é : ${this.imc}`
        },
        peso : p,
        altura : a,
        //get permite passar uma funçao como atributo  isso é um getter ou get 
        get imc(){
            const indice = this.peso / (this.altura**2)
            return indice.toFixed(2)
        }
    }
}
//this refere se ao objeto inteiro , e a que chamou no exemplo a const p1

const p1 = criaPessoa('Sidemar', 'Junior', 1.85,100)
p1.nomeCompleto = 'Joao Paulo Silva'
//console.log(p1.nomeCompleto)
console.log(p1.fala('IMC'))



