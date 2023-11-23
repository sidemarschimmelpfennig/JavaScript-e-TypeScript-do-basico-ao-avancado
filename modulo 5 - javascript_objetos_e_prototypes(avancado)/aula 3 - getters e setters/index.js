function Produto(nome, preco , estoque){
    this.nome = nome 
    this.preco = preco
   Object.defineProperty(this, 'estoque', {
        enumerable : true,//chave
        configurable: true, // pode configurar??  
        get: function(){
            return estoque
        }, 
        set: function(valor){
            
        } 
        })
 
}
const p1 = new Produto('Camiseta', 50 , 3)


console.log(p1.estoque)