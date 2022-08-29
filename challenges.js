// Desafio 1
let valor1 = true;
let valor2 = true;

function compareTrue(condicao1, condicao2) {
  if (condicao1 === true && condicao2 === true) {
    return true;
  } 
    return false;  
}
console.log(compareTrue(valor1, valor2));

// Desafio 2
let baseTriangulo = 51;
let alturaTriangulo = 1;
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(baseTriangulo, alturaTriangulo));

// Desafio 3
let fraseADividir = 'foguete'
function splitSentence(condicao1) {
  return condicao1.split(' ');
}
console.log(splitSentence(fraseADividir));

// Desafio 4
let arrayNomes = [];
function concatName(array) {
  let fraseFinal = array[(array.length -1)] +", "+array[0];
  return fraseFinal;
}
console.log(concatName(arrayNomes));

// Desafio 5
let vitorias = 0;
let empates = 0;
function footballPoints(wins, ties) {
  return (wins * 3 + ties)
}
console.log(footballPoints(vitorias, empates));

// Desafio 6
let arrayNumeros = [-2,-2,-1];
function highestCount(numeros) {
  let cont = numeros[0];
  let numerosArray = numeros;
  let quantidade =0
  for (let index = 0; index < numerosArray.length; index += 1){    
    if (numerosArray[index] >= cont){
      cont = numeros[index]
    }
  }
  for (let index = 0; index < numerosArray.length; index += 1){
    if (numerosArray[index] === cont){
      quantidade += 1;
    }
  }
  return quantidade;  
}
console.log(highestCount(arrayNumeros));

// Desafio 7
let gato1 = 0;
let gato2 = 2;
let rato = 1;
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  }else if (Math.abs((cat2 - mouse)) < Math.abs((cat1 - mouse))) {
    return 'cat2';
  } else if (Math.abs((cat1 - mouse)) === Math.abs((cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(rato, gato1, gato2));

// Desafio 8
let arrayFizzBuzz = [7, 9];
function fizzBuzz(array) {
  let resultado = []
  for (let index = 0; index < array.length; index += 1){    
    let temp = array[index]
    if (temp%3 === 0 && temp%5 === 0){
      resultado.push ('fizzBuzz');
    }else if (temp%3 === 0){
      resultado.push ('fizz');
    }else if (temp%5 === 0){
      resultado.push('buzz');
    }else{
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz(arrayFizzBuzz));

// Desafio 9
let fraseNaoCodificada = 'hi there!'
function encode(parametro1) {
  let temp = '';
  for (let index = 0; index < parametro1.length; index += 1) {
    if (parametro1[index] === 'a') {
      temp = temp + '1';;
    } else if (parametro1[index] === 'e') {
      temp = temp + '2';
    } else if (parametro1[index] === 'i') {
      temp = temp + '3';
    } else if (parametro1[index] === 'o') {
      temp = temp + '4';
    } else if (parametro1[index] === 'u') {
      temp = temp + '5';
    } else {
      temp = temp + parametro1[index];
    }
  }
  return temp;
}
console.log(encode(fraseNaoCodificada))

let fraseCodificada = 'h3 th2r2!'
function decode(parametro1) {
  let temp = '';
  for (let index = 0; index < parametro1.length; index += 1) {
    if (parametro1[index] === '1') {
      temp = temp + 'a';;
    } else if (parametro1[index] === '2') {
      temp = temp + 'e';
    } else if (parametro1[index] === '3') {
      temp = temp + 'i';
    } else if (parametro1[index] === '4') {
      temp = temp + 'o';
    } else if (parametro1[index] === '5') {
      temp = temp + 'u';
    } else {
      temp = temp + parametro1[index];
    }
  }
  return temp;
}
console.log(decode(fraseCodificada))

// Desafio 10
let arrayDesafio10 = ['React', 'Jest', 'HTML', 'Javascript'];
let variavelDesafio10 = 'Saulo'
function techList(array, name) {
  let novoArray = [];
  array.sort()
  if (array.length == 0) {
    novoArray = "Vazio!"
  }
  for (let index = 0; index < array.length; index += 1) {
    novoArray.push({'tech': array[index], 'name': name})
  }  
  return novoArray
}
console.log(techList(arrayDesafio10, variavelDesafio10))

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
