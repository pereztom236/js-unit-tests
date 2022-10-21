const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  const menu = {
    food: { coxinha: 3.9, sopa: 9.9 },
    drink: { agua: 3.9, cerveja: 6.9 },
  };

  const restaurant = createMenu(menu);

  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(typeof createMenu).toBe('function');
  });

  it(`O objeto retornado deve ter a chave 'fetchMenu'`, () => {
    expect(restaurant).toHaveProperty('fetchMenu');
  });

  it(`A chave 'fetchMenu' deve ser uma função`, () => {
    expect(typeof restaurant.fetchMenu).toBe('function');
  });

  it(`As chaves do objeto retornado pela função 'fetchMenu' devem ser iguais ao do objeto recebido como parâmetro`, () => {
    expect(Object.keys(restaurant.fetchMenu())).toEqual(['food', 'drink']);
  });

  it(`O objeto retornado por 'fetchMenu' deve ser igual ao passado no parâmetro da função createMenu`, () => {
    expect(restaurant.fetchMenu()).toEqual(menu);
  });

  it(`O array 'consumption' deve ser inicialmente vazio`, () => {
    expect(restaurant.consumption).toEqual([]);
  });

  it(`O array 'consumption' deve ter a string passada como parâmetro na função 'order'`, () => {
    restaurant.order('coxinha');

    expect(restaurant.consumption).toEqual(['coxinha']);

    restaurant.order('agua');
    restaurant.order('sopa');
    restaurant.order('sashimi');

    expect(restaurant.consumption).toEqual([
      'coxinha',
      'agua',
      'sopa',
      'sashimi',
    ]);
  });

  it(`O array 'consumption' deve poder receber valores repetidos`, () => {
    restaurant.order('coxinha');

    expect(restaurant.consumption).toEqual([
      'coxinha',
      'agua',
      'sopa',
      'sashimi',
      'coxinha',
    ]);
  });

  it(`A função 'pay' deve retornar o valor toal da conta`, () => {
    expect(restaurant.pay()).toBe('23.76');
  });
});
