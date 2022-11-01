// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

// Não sabia que linter reclamava por uso abusivo sem declaração de constantes...
const cart = document.querySelector('.cart__items');

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const cartItemClickListener = (lista) => {
  cart.removeChild(lista.target);
  // const lista1 = document.querySelector('.cart__items').innerHTML;
  saveCartItems(cart.innerHTML);
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const limparTudo = () => {
  const esvaziar = document.querySelector('.empty-cart');
  esvaziar.addEventListener('click', () => {
    while (cart.hasChildNodes()) {
      cart.removeChild(cart.firstChild);
      localStorage.clear();
    }
  });
};

const listaComputadores = async () => {
  const lista = await fetchProducts('computador');
  lista.results.forEach((elem) => {
    document.querySelector('.items').appendChild(createProductItemElement(elem));
  });
};

const carrinho = () => {
  document.querySelectorAll('.item').forEach((a) => {
    const prim = a.firstChild.innerText;
    const botao = a.lastChild;
    botao.addEventListener('click', async () => {
      const pc = await fetchItem(prim);
      await cart.appendChild(createCartItemElement(pc));
      // const lista2 = document.querySelector('.cart__items').innerHTML;
      saveCartItems(cart.innerHTML);
    });
  });
};

const puxarLocal = () => {
  // const lista3 = document.querySelector('.cart__items');
  cart.innerHTML = localStorage.getItem('cartItems');
  for (let i = 0; i < cart.children.length; i += 1) {
    cart.children[i].addEventListener('click', cartItemClickListener);
  }
};

const loading = () => {
  const add = document.querySelector('.items');
  const h1 = document.createElement('H1');
  // add.appendChild(h1.innerText = 'Loading');
  h1.innerText = 'Loading';
};

window.onload = async () => {
  await listaComputadores();
  await carrinho();
  limparTudo();
  puxarLocal();
};
