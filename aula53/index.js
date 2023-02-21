function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');

console.log(funcao);