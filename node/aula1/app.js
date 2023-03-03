const path = require('path');
const axios = require('axios');
const { Pessoa, nome, sobrenome } = require('./mod1');

const p1 = new Pessoa('Guilherme');
console.log(p1, nome, sobrenome);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(res => console.log(res.data))
//     .catch(e => console.error(e));