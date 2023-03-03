const nome = prompt('Digite seu nome completo:');
const letters = nome.split(" ").join("");
const numberOfLetters = letters.length;
const secondLetter = letters[1];
const firstIndex = letters.indexOf("e")
const lastIndex = letters.lastIndexOf("e")
const lastLetters = letters.slice(-3)

console.log(numberOfLetters);


  document.body.innerHTML += `Seu nome é: ${nome}<br />`;
  document.body.innerHTML += `Seu nome tem ${numberOfLetters} letras <br />`;
  document.body.innerHTML += `A segunda letra do seu nome é: ${secondLetter}<br />`;
  document.body.innerHTML += `Qual o primeiro índice da letra "e" no seu nome? ${firstIndex}<br />`;
  document.body.innerHTML += `Qual o último índice da letra "e" no seu nome? ${lastIndex}<br />`;
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ${lastLetters }<br />`;
  document.body.innerHTML += `As palavras do seu nome são: ${nome.split()}<br />`;
  document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
  document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;