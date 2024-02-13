//superclass
function Conta (agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if (valor > this.saldo ){
        console.log(`Saldo Insuficiente : ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(111, 10, 120)

console.log(conta1)
conta1.depositar(50)
conta1.sacar(100)

function ContaCorrente (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
ContaCorrente.prototype.sacar  = function(valor) {
    if(valor > this.saldo){
        console.log(`Saldo Insuficiente : ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

const cc = new ContaCorrente(11, 10, 10, 10)
cc.depositar(100)
cc.sacar(100)
cc.sacar(2)
cc.depositar(111)

function ContaPoupanca (agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

console.log()
const cp = new ContaPoupanca(11, 10, 0)
cp.depositar(100)
cp.sacar(100)
cp.sacar(2)
cp.depositar(111)
