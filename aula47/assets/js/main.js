function getTimeFromSeconds(sec) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const clock = document.querySelector('.clock');     
const defaultColor = '#000'
const dictionary = {
    clear: 'clear',
    start: 'start',
    pause: 'pause'
}

let seconds = 0;
let timer;

function startClock(){
    timer = setInterval(()=> {
        seconds++; 
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', (el)=>{
    const element = el.target;
    if (element.classList.contains(dictionary.clear)) {
        clock.style.color = defaultColor;
        clock.innerHTML = getTimeFromSeconds(0);
        seconds = 0;
    } else if (element.classList.contains(dictionary.start)) {
        clearInterval(timer);
        clock.style.color = defaultColor;
        startClock();
    } else if (element.classList.contains(dictionary.pause)) {
        clearInterval(timer);
        clock.style.color = 'red';
    }
    
});