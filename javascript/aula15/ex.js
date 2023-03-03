const num1 = Number(prompt('Digite um número: '))


document.body.innerHTML += `<h2> Seu número é ${num1} </h2>`;
document.body.innerHTML += `Raiz quadrada: ${num1 ** 0.5} <br />`;
document.body.innerHTML += `${num1} é inteiro: ${Number.isInteger(num1)}<br />`;
document.body.innerHTML += `É NaN: ${Number.isNaN(num1)}<br />`;

document.body.innerHTML += `Arredondado pra baixo: ${Math.floor(num1)}<br />`;
document.body.innerHTML += `Arredondado pra cima: ${Math.ceil(num1)}<br />`;
document.body.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)}<br />`;