const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 25,

    fala() {
        console.log(`${this.nome} está dizendo oi`);
    },

    incrementaIdade(){
        this.idade++;
    },
};

console.log(pessoa1.nome);
pessoa1.incrementaIdade();
console.log(pessoa1.idade);
pessoa1.fala();