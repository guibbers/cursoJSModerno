const data = new Date();
const weekDay = getWeekDay(data);
const day = data.getDate();
const year = data.getFullYear();
const hour = data.getHours();
const minutes = data.getMinutes();
const result = document.querySelector('#data')

function getWeekDay(data) {
    const dictionary = {
        0: 'Domingo',
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: 'Sábado'
    }

    return dictionary[data.getDay()]
}

function getWrittenMonth(data) {
    const dictionary = {
        0: 'janeiro',
        1: 'fevereiro',
        2: 'março',
        3: 'abril',
        4: 'maio',
        5: 'junho',
        6: 'julho',
        7: 'agosto',
        8: 'setembro',
        9: 'outubro',
        10: 'novembro',
        11: 'dezembro'
    };
    
    return dictionary[data.getMonth()];
}

function formatHours(number){
    return number < 10 ? `0${number}` : number
}

result.innerHTML = `${weekDay}, ${day} de ${getWrittenMonth(data)} de ${year} </br> ${formatHours(hour)}:${formatHours(minutes)}`;

// const result = document.querySelector('#data');
// const data = new Date();


// result.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});