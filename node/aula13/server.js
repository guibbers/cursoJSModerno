const express = require('express');
const port = 3000;
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));


// Nossos próprios middlewares
app.use(middlewareGlobal);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);


app.listen(port, ()=>{ console.log(`Server running on port: ${port}.`) });