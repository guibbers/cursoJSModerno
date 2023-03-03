const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaTotal = numeros.reduce(function(acc, value){
    return acc += value;
}, 0);

const pares = numeros.filter((el) => el % 2 === 0);

// const dobro = numeros.map((el) => el * 2);

console.log(somaTotal);
console.log(pares)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 70 },
    { nome: 'Wallace', idade: 47 }
];

const pessoaMaisVelha = pessoas.reduce(function(acc, obj){
    if(acc.idade > obj.idade) {
        return acc;
    }
    return obj;
});

console.log(pessoaMaisVelha)