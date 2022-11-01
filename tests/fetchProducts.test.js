require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testando se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('testando se fetchProducts foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('testando se fetchProducts retorna o endpoint', async () => {
    await expect(fetchProducts('computador'));
    expect(fetch)
    .toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('testando se o retorno da função com o argumento computador retorna computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('testando se ao chamar a função sem argumento retorna um erro', async () => {
    try {
      await fetchProducts();
    } catch (erro) {
      expect(erro).toEqual(new Error('You must provide an url'));
    }
  });
});
