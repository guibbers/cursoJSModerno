function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(() => console.log(mostraHora()), 1000); // executa n vezes

setTimeout(()=> clearInterval(timer), 10000); // executa uma vez

setTimeout(()=> console.log('Olá mundo!') , 5000);