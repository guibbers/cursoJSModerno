// Map -> retorna um array com valores alterados;

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map((el)=> el * 2);


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const nomes = pessoas.map((el) => el.nome);
console.log(nomes);
const idades = pessoas.map((el) => ({ idade: el.idade }));
console.log(idades);
const pessoasComId = pessoas.map((el, index) => ({nome: el.nome, idade: el.idade, id: index }));
console.log(pessoasComId);