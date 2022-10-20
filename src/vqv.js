/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (name, age) => {
  if (name === undefined || age === undefined) {
    return undefined;    
  }
  let string = `Oi, meu nome é ${name}!\n`;
  string += `Tenho ${age} anos,\n`;
  string += 'trabalho na Trybe e mando muito em programação!\n';
  string += '#VQV!';
  return string;
};

module.exports = vqv;
