function Produto(nome, preco , estoque){
    //this.estoque = estoque

   /* Object.defineProperty(this, 'estoque', {
        enumerable : true,//chave
        value  : estoque,//valor
        writable : true,  //coloca se o valor pode ou nao ser alterado 
        configurable: false // pode configurar??  
        })*/
    Object.defineProperties(this,{
        nome : {
            enumerable : true,
            value  : nome,
            writable : true,  
            configurable: false
        },
        preco : {
            enumerable : true,
            value  : preco,
            writable : true,  
            configurable: false
        }
    })
}



const p1 = new Produto('Camiseta', 50 , 3)


console.log(p1)