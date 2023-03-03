let a = [1, 2, 3];
// let b = a; // REFERENCIA O MESMO LUGAR NA MEMORIA, UM ARRAY MODIFICADO ALTERARÁ O OUTRO
let b = [...a] // COPIA OS DADOS DE UM ARRAY PRO OUTRO / LUGARES DIFERENTES NA MEMÓRIA

console.log(a, b);
b.push(4);

console.log(a, b)