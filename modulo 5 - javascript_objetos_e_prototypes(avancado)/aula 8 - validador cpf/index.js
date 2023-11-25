
/*
111.111.111-11
***cpf sequencial nao é valido


1x  1x 1x 1x 1x 1x 1x 1x 1x
10  9  8  7  6  5  4  3  2 
10  +9 +8 +7 +6 +5 +4 +3 +2 = total

 o resto da divisao por 11
11 - (total % 11) = resultado
       
*********se maior que nove considera-se 0*********

1x  1x  1x 1x 1x 1x 1x 1x 1x resultadox
11  10  9  8  7  6  5  4  3  2 
11 +10 +9  +8 +7 +6 +5 +4 +3 +(resultado*2) = total2

o resto da divisao por 11
11 -(total2 % 11) = resultado2

111.111.111-resultado resulatado2 === cpf de entrada        
se o o digito for maiaor que 9 igual  a 0
*/

function CpfValidate(cpfReceived){
        if(typeof cpfReceived === 'undefined') return false
        Object.defineProperty(this, 'clearCpf', {
                enumerable : true,
                get: function() {
                        return cpfReceived.replace(/\D+/g, '')
                }
        } )
}
CpfValidate.prototype.validate =  function(){
        if(typeof this.clearCpf === 'undefined') return false
        if (this.clearCpf.length !== 11)return false
        if(this.sequencialCpf()) return false
        const parcialCpf = this.clearCpf.slice(0, -2)
        const firstDigit = this.createDigit(parcialCpf)
        const secondDigit = this.createDigit((parcialCpf + firstDigit)) 
        
        const newCpf = parcialCpf + firstDigit + secondDigit
       
        return newCpf === this.clearCpf
}
CpfValidate.prototype.createDigit = function (parcialCpf) {
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

CpfValidate.prototype.sequencialCpf = function () {
        return this.clearCpf[0].repeat(this.clearCpf.length) === this.clearCpf
}
const cpf = new CpfValidate()

cpf.validate() ? console.log('Cpf válido') : console.log('Cpf Inválido')
