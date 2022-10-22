const payment = (consumption, menu) => {
  let bill = 0;

  consumption.forEach((item) => {
    for (let index = 0; index < Object.keys(menu).length; index += 1) {
      if (Object.keys(menu.food)[index] === item) {
        bill += Object.values(menu.food)[index];
      }

      if (Object.keys(menu.drink)[index] === item) {
        bill += Object.values(menu.drink)[index];
      }
    }
  });

  return (bill * 1.1).toFixed(2);
};

const createMenu = (menu) => {
  const restaurant = {
    fetchMenu: () => menu,

    consumption: [],

    order(request) {
      restaurant.consumption.push(request);
    },

    pay() {
      const bill = payment(restaurant.consumption, menu);
      return bill;
    },
  };

  return restaurant;
};

module.exports = createMenu;
