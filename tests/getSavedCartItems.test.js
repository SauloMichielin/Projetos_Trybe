const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testando se a função chama local storage', () => {
    getSavedCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Testando se a função chama local storage', () => {
    getSavedCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems');
  })
});
