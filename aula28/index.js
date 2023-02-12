const data = new Date();

console.log('Data completa', data)
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Horas', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());

const weekDayDictionary = {
    0: 'Domingo',
    1: 'Segunda-feira',
    2: 'Terça-feira', 
    3: 'Quarta-feira',
    4: 'Quinta-feira',
    5: 'Sexta-feira',
    6: 'Sábado'
}

console.log((weekDayDictionary[data.getDay()]));