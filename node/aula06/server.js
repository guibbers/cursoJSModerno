const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello world!');
});

app.get('/contato', (req, res)=>{
    res.send('obrigado por entrar em contato')
})

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});