const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const returnedArray = productDetails('Alcool gel', 'Máscara');

  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
  });

  it(`O retorno da função deve ser um array`, () => {
    expect(Array.isArray(returnedArray)).toBe(true);
  });

  it('O array retornado deve ter tamanho 2', () => {
    expect(returnedArray.length).toBe(2);
  });
  
  it('Os elementos retornados devem ser objetos', () => {
    returnedArray.forEach(element => {
      expect(typeof element).toBe('object');
    });
  });

  it('Os elementos retornados não podem se repetir', () => {
    expect(returnedArray[0]).not.toBe(returnedArray[1]);
  });

  it(`O 'productId' de cada elemento deve terminar com 123`, () => {
    returnedArray.forEach(element => {
      expect(element.details.productId.endsWith('123')).toBe(true);
    });
  });
});
