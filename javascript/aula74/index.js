function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.getNomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// instanciação
const pessoa1 = new Pessoa('Luiz', 'O.');
const data = new Date();

console.dir(pessoa1.getNomeCompleto());
console.dir(data);