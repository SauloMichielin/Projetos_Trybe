require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('testando se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('testando se fetchItem foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('testando se fetchItem retorna o endpoint', async () => {
    await expect(fetchItem('MLB1615760527'));
    expect(fetch)
    .toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('testando se o retorno da função com o argumento computador retorna os itens', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('testando se ao chamar a função sem argumento retorna um erro', async () => {
    try {
      await fetchItem();
    } catch (erro) {
      expect(erro).toEqual(new Error('You must provide an url'));
    }
  });
});
