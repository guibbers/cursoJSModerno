function randomTime(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function connectDB(msg, time) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('bad value')
        setTimeout(() => {
            resolve(msg);
        }, time);
    });

}

connectDB('Frase 1' , randomTime(1, 3))
    .then(resposta => { 
        console.log(resposta);
        return connectDB('Frase 2' , randomTime(1, 3))
    })
    .then(resposta => resposta + ' vai pro outro Then')
    .then(resposta => {
        console.log(resposta);
        return connectDB('Frase 3', randomTime(1, 3))
    })
    .then(resposta => console.log(resposta))
    .then(() => console.log('o ultimo a ser exibido'))
    .catch( e => {
        console.log('ERRO', e);
    });