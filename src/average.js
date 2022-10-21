const verifyArray = (arrayOfNumbers) => {
  if (arrayOfNumbers.length === 0) {
    throw new Error();
  }

  arrayOfNumbers.forEach((element) => {
    if (typeof element !== 'number') {
      throw new Error();
    }
  });
};

const average = (arrayOfNumbers) => {
  try {
    verifyArray(arrayOfNumbers);
    
    let sum = 0;

    arrayOfNumbers.forEach((number) => {
      sum += number;
    });

    return Math.round(sum / arrayOfNumbers.length);
  } catch (error) {
    return undefined;
  }
};

module.exports = average;
