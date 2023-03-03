function randomTime(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function connectDB(msg, time) {

    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') {
            reject('bad value');
            return
        }

        setTimeout(() => {
            resolve(msg + ' - Passei na promise');
            return
        }, time);

    });

}

function baixaPagina() {
    const emCache = true;
    if(emCache){
        return Promise.resolve('Página em cache')
        // return Promise.reject('Erro')
    } else {
        return connectDB('Baixei a página', 2000);
    }
}

// Promise.all Promise.race Promise.resolve Promise.reject 

const promises = [
    // 'Primeiro valor', 
    connectDB('Promise 1', 3000), 
    connectDB('Promise 2', 500), 
    connectDB('Promise 3', 1000),
    // 'Outro valor'
];

// Promise.all(promises)
//     .then(val => {
//         console.log(val);
//     })
//     .catch((e)=> console.log(e));

// Promise.race(promises)
//     .then(val => console.log(val))
//     .catch(e => console.log(e));

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e))
