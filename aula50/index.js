// variável arguments sustenta todos os argumentos enviados

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7);

function outraFuncao(a, b = 2, c = 4) {
    console.log(a + b + c)
}

outraFuncao(2, undefined, 20) // A unica maneira de pular um argumento com valor padrão

function aindaOutraFuncao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

aindaOutraFuncao({nome: 'Guilherme', sobrenome: 'Torres', idade: 30});

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros ){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}

conta('+', 1, 20, 30, 40, 50);