function myScope() {
    
    const form = document.querySelector('form');
    const peopleArray = [];

    form.addEventListener('submit', (e)=> {
        e.preventDefault()
        const nome = document.querySelector('#first-name').value
        const sobrenome = document.querySelector('#last-name').value
        const altura = document.querySelector('#height').value
        const weight = document.querySelector('#weight').value

        peopleArray.push({nome: nome, sobrenome: sobrenome, altura: altura, weight: weight})
        console.log(peopleArray)
        
        let paragrafo = document.querySelector('.resultado')
        paragrafo.innerHTML = `${nome} ${sobrenome} ${altura} ${weight}`
    });
}

myScope();
