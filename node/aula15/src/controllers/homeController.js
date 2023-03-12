const HomeModel = require('../models/HomemModel');

// HomeModel.create({
//     titulo: 'Copa do Brasil',
//     descricao: 'Competição Nacional de clubes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.error(e));

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.error(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
};