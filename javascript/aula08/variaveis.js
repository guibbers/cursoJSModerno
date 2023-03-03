const nome = "Guilherme";
const sobrenome = "Torres";
const idade = 30;
const peso = 117;
const altura = 1.9;
let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura}m de altura e seu IMC é de ${imc.toFixed(2)} `);
console.log(`${nome} nasceu em ${anoNascimento}`);