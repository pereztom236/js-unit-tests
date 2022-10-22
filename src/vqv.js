const vqv = (name, age) => {
  if (name === undefined || age === undefined) return undefined;

  let pitch = `Oi, meu nome é ${name}!\n`;
  pitch += `Tenho ${age} anos,\n`;
  pitch += 'trabalho na Trybe e mando muito em programação!\n';
  pitch += '#VQV!';

  return pitch;
};

module.exports = vqv;
