//088.494.769.65
/*

0x  8x 8x 4x 9x 4x 7x 6x 9x
10  9  8  7  6  5  4  3  2 
0  72 64 28 54 20 28 18 18 = 302

//pegar o primeiro numero
11 - (312 % 11) = 6
        5 é o resto da divisao 
        se maior que nove considera-se 0

0x  8x 8x 4x 9x 4x 7x 6x 9x 6x
11  10  9  8  7  6  5  4  3  2 
0   80  72 32 63 24 35 24 27 12 = 324
11 -(324 % 11) = 5
        6
se o o digito for maiaor que 9 igual  a 0
*/

function CPFValidate(cpfReceived){
   Object.defineProperty(this, 'clearCpf', {
        enumerable : true,
        get: function() {
           return cpfReceived.replace(/\D+/g, '')
        }
   } )
}
CPFValidate.prototype.validate =  function(){
        if(typeof this.clearCpf === 'undefined' || this.clearCpf === null )return false
        if (this.clearCpf.length !== 11)return false
        const parcialCpf = this.clearCpf.slice(0, -2)
        const firstDigit = this.createDigit(parcialCpf)
        const secondDigit = this.createDigit((parcialCpf + firstDigit)) 
        
        const newCpf = parcialCpf + firstDigit + secondDigit
       
        return newCpf === this.clearCpf
}
CPFValidate.prototype.createDigit = function (parcialCpf) {
        const arrayCpf  = Array.from(parcialCpf)
        let regressiveCounter = arrayCpf.length + 1
        const digit = arrayCpf.reduce((ac, val)=>{
                ac += (regressiveCounter * Number(val))  
                regressiveCounter--
                return ac
        }, 0)
        const total = 11 - (digit%11)

        return total > 9 ? '0' : String(total)
}


const cpf = new CPFValidate('088.494.769-65')
console.log(cpf.validate())