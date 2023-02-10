const form = document.querySelector('form')
const result = document.querySelector('#result')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const IMC = (peso / (altura ** 2)).toFixed(1);
    let avaliacao;

    if( !peso || peso <= 0 || peso >= 400)  {
        avaliacao = 'Peso inválido'
        result.style.background = 'rgb(255, 0, 0)'
    } else if (!altura || altura <= 0.5 || altura >= 2.8    ) {
        avaliacao = "Altura inválida"
        result.style.background = 'rgb(255, 0, 0)'
    } else {
        if (IMC < 18.5) {
            avaliacao = `Seu IMC é ${IMC} (Abaixo do peso)`
            result.style.background = 'rgb(255, 0, 0)'
        } else if(IMC >=18.5 && IMC <= 24.9) {
            avaliacao = `Seu IMC é ${IMC} (Peso normal)`
            result.style.background = 'rgb(17, 224, 10)'
        } else if(IMC >=25 && IMC <= 29.9) {
            avaliacao = `Seu IMC é ${IMC} (Sobrepeso)`
            result.style.background = 'rgb(233, 236, 5)'
        } else if(IMC >=30 && IMC <= 34.5) {
            avaliacao = `Seu IMC é ${IMC} (Obesidade Grau 1)`
            result.style.background = 'rgb(245, 79, 2)'
        } else if(IMC >=35 && IMC <= 39.9) {
            avaliacao = `Seu IMC é ${IMC} (Obesidade Grau 2)`
            result.style.background = 'rgb(245, 10, 2)'
        } else if(IMC > 40) {
            avaliacao = `Seu IMC é ${IMC} (Obesidade Grau 3)`
            result.style.background = 'rgb(255, 0, 0)'
        }
    }

    

    result.innerHTML = avaliacao
})