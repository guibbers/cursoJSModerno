function saudacao(nome) {
    return `Bom dia ${nome}!` ;
};

const variavel = saudacao('Luiz');
console.log(variavel);

function soma(n1 = 1, n2 = 1) {
    return n1 + n2;
};

const result = soma(2, 2);
console.log(result);

const raiz = (number) =>{
    return number ** 0.5
};

console.log(raiz(25));