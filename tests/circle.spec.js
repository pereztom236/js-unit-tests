const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle(1)).toEqual({
      radius: 1,
      area: 3.14,
      circumference: 6.28,
    });
  });

  it(`A função retorna undefined se o parâmetro não é um número`, () => {
    expect(circle(isNaN)).toBe(undefined);
  });

  it(`A função retorna um objeto`, () => {
    expect(typeof circle(1)).toBe('object');
  });

  it(`O objeto retornado possui 3 propriedades`, () => {
    expect(Object.keys(circle(2)).length).toBe(3);
  });

  it(`A função retorna undefined quando não recebe nenhum parâmetro`, () => {
    expect(circle()).toBe(undefined);
  });

  it(`O objeto retorna a 'circumference' certa para circle(2)`, () => {
    expect(circle(2).circumference).toBe(12.56);
  });

  it(`O objeto retorna a 'area' certa para circle(3)`, () => {
    expect(circle(3).area).toBeCloseTo(28.26, 2);
  });

  it(`A função retorna os valores corretos para circle(3)`, () => {
    expect(circle(3).radius).toBe(3);

    expect(circle(3).area).toBeCloseTo(28.26, 2);

    expect(circle(3).circumference).toBeCloseTo(18.84, 2);
  });
});
