const fetchProducts = async (par) => {
  if (par === undefined) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${par}`;
  const resultado = await fetch(url).then((ret) => ret.json());
  return resultado;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
