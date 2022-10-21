/* eslint-disable max-len */

const payment = (array, object) => {
  let bill = 0;
  array.forEach((element) => {
    for (let index = 0; index < Object.keys(object).length; index += 1) {
      if (Object.keys(object.food)[index] === element) {
        bill += Object.values(object.food)[index];
      }
      if (Object.keys(object.drink)[index] === element) {
        bill += Object.values(object.drink)[index];
      }
    }
  });
  return (bill * 1.1).toFixed(2);
};

const createMenu = (object) => {
  const restaurant = {
    fetchMenu: () => object,
    consumption: [],
    order(string) {
      restaurant.consumption.push(string);
    },
    pay() {
      const bill = payment(restaurant.consumption, object);
      return bill;
    },
  };
  return restaurant;
};

module.exports = createMenu;
