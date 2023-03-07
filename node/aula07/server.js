const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o pedro');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(port, ()=>{ console.log(`Server running on port: ${port}.`); })