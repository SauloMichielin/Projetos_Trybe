// Função para verificação de login
//  ____       _      _   _   _        ___
// / ___|     / \    | | | | | |      / _ \
// \___ \    / _ \   | | | | | |     | | | |
//  ___) |  / ___ \  | |_| | | |___  | |_| |
// |____/  /_/   \_\  \___/  |_____|  \___/
const btnEnviar = document.getElementById('btn-enviar');

function validacao() {
  const inputEmail = document.getElementById('email');
  const inputSenha = document.getElementById('senha');
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

btnEnviar.addEventListener('click', validacao);

// Função para habilitar botão
const botao = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
function habilitar() {
  if (checkBox.checked === true) {
    botao.removeAttribute('disabled');
  } else {
    botao.setAttribute('disabled', 'disabled');
  }
}

checkBox.addEventListener('click', habilitar);

// Função para contar caracteres
const textArea = document.getElementById('textarea');

function contador() {
  const maxletra = 500;
  const totletra = document.getElementById('textarea').value.length;
  if (totletra <= maxletra) {
    const resto = maxletra - totletra;
    document.getElementById('counter').innerText = resto;
    // } else {
    //   document.getElementById('counter').innerText;
  }
}

textArea.addEventListener('keyup', contador);

// Função para atribuir form1 ao form2

const nameComplete = document.getElementById('name-complete');
const mail = document.getElementById('mail');
const casa = document.getElementById('casa');
const obs = document.getElementById('obs');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');

function form2Simple() {
  nameComplete.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  mail.innerText = `Email: ${document.getElementById('input-email').value}`;
  casa.innerText = `Casa: ${document.getElementById('house').value}`;
  obs.innerText = `Observações: ${document.getElementById('textarea').value}`;
}

const materias = document.getElementById('materias');
const campos = document.getElementById('campos');
const temp = [];
let final = '';

function form2Materias() {
  for (let i = 0; i < campos.children.length; i += 1) {
    if (campos.children[i].checked === true) {
      temp.push(campos.children[i].value);
      final = `Matérias: ${temp}`;
    }
  }
  materias.innerText = final.replace(/,/g, ', ');
}

const family = document.getElementById('family');
const frontend = document.getElementById('Frontend');
const backend = document.getElementById('Backend');
const fullStack = document.getElementById('FullStack');

function form2Family() {
  if (frontend.checked === true) {
    family.innerText = 'Família: Frontend';
  } else if (backend.checked === true) {
    family.innerText = 'Família: Backend';
  } else if (fullStack.checked === true) {
    family.innerText = 'Família: FullStack';
  }
}

const evaluation = document.getElementById('evaluation');
const aval = document.getElementById('avaliacao');

function form2Aval() {
  for (let i = 0; i < aval.children.length; i += 1) {
    if (aval.children[i].checked === true) {
      evaluation.innerText = `Avaliação: ${aval.children[i].value}`;
    }
  }
}

// Função para apagar magicamente

function hidden() {
  form2Simple();
  form2Materias();
  form2Family();
  form2Aval();
  const esconder = document.getElementById('evaluation-form');
  const aparecer = document.getElementById('form-data');
  esconder.setAttribute('style', 'display: none');
  aparecer.removeAttribute('style', 'display: none');
}

botao.addEventListener('click', hidden);
