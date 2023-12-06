class DispositivoEletronico {
    constructor (nome){
        this.nome = nome
        this.ligado = false
    }


    ligar () {
        if (this.ligado){
            console.log(`${this.nome} esta ligado`)
            return
        }    
        this.ligado = true
    }

    desligado () {
        if (!this.ligado){
            console.log(`${this.nome} esta desligado`)
            return
        }    
        this.ligado = false
    }
}


const dispositivo = new DispositivoEletronico('radio')

dispositivo.desligado()

dispositivo.ligar()

class SmartPhone extends DispositivoEletronico{
    constructor (cor, nome, modelo){
        super(nome)
        this.cor = cor 
        this.modelo = modelo
    }
}


const smp = new SmartPhone('Iphone', 'vermelho' , 'XS')
//nunca criar um encadeiamento muito grande de herança
console.log(smp)