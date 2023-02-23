// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
//     cidade: 'Niterói'
// };

// const chave = 'nome';

// console.log(pessoa[chave]);
// console.log(pessoa.sobrenome);
// console.log(pessoa['cidade']);

// const pessoa2 = new Object();
// pessoa2.nome = 'Luiz';
// pessoa2.sobrenome = 'Otávio';


// delete pessoa2.sobrenome;
// console.log(pessoa2)

// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
//     cidade: 'Niterói',
//     idade: 30,
//     falarNome: function() {
//         console.log(`${this.nome} está falando seu nome`);
//     }
// };

// pessoa.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// console.log(pessoa.getDataNascimento());

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         },
//     };
// };

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda');

console.log(p1);