const express = require('express');
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, ()=>{ console.log(`Server running on port: ${port}.`) });