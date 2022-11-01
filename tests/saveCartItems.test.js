const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testando se a função salva local storage', () =>{
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Testando se a função salva local storage', () =>{
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', cartItem);
  })
});
