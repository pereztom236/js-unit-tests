const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const obj = {
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    };
    const restaurant = createMenu(obj);
    expect(restaurant).toHaveProperty('fetchMenu');
    expect(typeof restaurant.fetchMenu).toBe('function');
    expect(Object.keys(restaurant.fetchMenu())).toEqual(['food', 'drink']);
    expect(restaurant.fetchMenu()).toEqual(obj);
    expect(restaurant.consumption).toEqual([]);
    restaurant.order('coxinha');
    expect(restaurant.consumption).toEqual(['coxinha']);
    restaurant.order('agua');
    restaurant.order('sopa');
    restaurant.order('sashimi');
    expect(restaurant.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);
    restaurant.order('coxinha');
    expect(restaurant.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi', 'coxinha']);
    expect(restaurant.pay()).toBe('23.76');
  });
});
