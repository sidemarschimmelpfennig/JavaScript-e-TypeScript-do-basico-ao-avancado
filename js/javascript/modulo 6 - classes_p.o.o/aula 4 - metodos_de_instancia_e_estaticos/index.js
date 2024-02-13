class ControleRemoto {
    constructor (tv) {
        this.tv = tv
        this.volume = 0
    }

    //metodo de instancia
    aumentarVolume (){
        this.volume += 2
    }
    //metodo de instancia
    diminuirVolume () {
        this.volume -= 2
    }

    //metodo de estatico
    static trocaPilha(){
        console.log('Ok, vou trocar')
    }

    static soma (x ,y ){
        return x + y
    }
}


const control = new ControleRemoto('samsung')
control.aumentarVolume()
control.aumentarVolume()
control.aumentarVolume()

ControleRemoto.trocaPilha()
//Exemplo Math.random() metodo statico
console.log (ControleRemoto.soma(1 , 2))
console.log(control)


