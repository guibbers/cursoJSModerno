function randomTime(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function connectDB(msg, time) {

    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') {
            reject('bad value');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, time);

    });

};

async function execute(){
    try {
        const fase1 = await connectDB('Fase 1', randomTime(0, 1))
        console.log(fase1);
        const fase2 = await connectDB('Fase 2', randomTime(0, 1))
        console.log(fase2);
        const fase3 = await connectDB('Fase 3', randomTime(0, 1))
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
}

execute()