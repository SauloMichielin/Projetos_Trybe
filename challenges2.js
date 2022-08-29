// Desafio 11
function generatePhoneNumber(telefone) {
  if (telefone.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (key in telefone) {
    let cont = 0
    for (chave in telefone) {
      if (telefone[key] === telefone[chave]) {
        cont += 1;
      }
      if (cont === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  for (index in telefone) {
    if (telefone[index] < 0 || telefone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } 
  }
  let numeroFinal = "("+telefone[0]+telefone[1]+") "+telefone[2]+telefone[3]+telefone[4]+telefone[5]+telefone[6]+'-'+telefone[7]+telefone[8]+telefone[9]+telefone[10];

  return numeroFinal
}

// Desafio 12
function triangleCheck(side1, side2, side3) {
  let lado1 = Math.abs(side1);
  let lado2 = Math.abs(side2);
  let lado3 = Math.abs(side3);
  if (lado1 > (lado2 + lado3) || lado2 > (lado1 + lado3) || lado3 > (lado2 + lado1)) {
    return false;
  }if (lado1 < Math.abs(lado2 - lado3) || lado2 < Math.abs(lado1 - lado3) || lado3 < Math.abs(lado2 - lado1)) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(condicao1) {
let numero = 0
  numero = condicao1.replace(/\D/g, '')
  let totalDeCopos = 0
  for (key in numero) {
    totalDeCopos = totalDeCopos + parseInt(numero[key])
  }
  if (totalDeCopos <= 1) {
    return totalDeCopos+' copo de água'
  } return totalDeCopos+' copos de água'

// A regex \D+ pega tudo que não é número;
//https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
}
console.log(hydrate('2 COPO'))
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
