// Declaração de função (function hoisting)

function falaOi() {
    console.log('Oi');
}
falaOi();

// Funções são first class objects
// Function expression 

const souUmDado = function() {
    console.log("Sou um dado");
}
souUmDado();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(falaOi);

// Arrow Function 

const arrow = ()=>{
    console.log("Sou uma arrow function");
}
arrow();

// Dentro de um objeto 

const obj = {
    falar: function(){ console.log("estou falando") },
}

obj.falar();