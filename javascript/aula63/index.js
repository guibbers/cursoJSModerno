const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, numero de elementos, el1, el2, el3)
// pop
console.log('Nomes: ', nomes)
const removidos = nomes.splice(3, 2);
console.log('Removidos: ', removidos)