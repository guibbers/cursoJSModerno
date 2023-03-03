// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor >this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    }

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c.: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}` );
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function(valor){
    if(valor >this.saldo + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    }

    this.saldo -= valor;
    this.verSaldo();
}
ContaPoupanca.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
ContaPoupanca.prototype.verSaldo = function(){
    console.log(`Ag/c.: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}` );
}

const cc = new ContaPoupanca(11, 22, 0, 100);


function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function(valor){
    if(valor >this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return
    }

    this.saldo -= valor;
    this.verSaldo();
}
ContaPoupanca.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
ContaPoupanca.prototype.verSaldo = function(){
    console.log(`Ag/c.: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}` );
}

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(20);
