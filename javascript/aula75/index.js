function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percent) {
    this.preco = this.preco - (this.preco * (percent / 100));
};

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamaho2: {

    }
});

console.log(p3);