const Cachorro = require('./b/c/d/mod');
const path = require('path')

const cachorrinho = new Cachorro('Sputnik Rodrigo');

cachorrinho.latir();

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));