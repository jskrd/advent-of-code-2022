const caloriesPerElf = (list) =>
  list.split('\n\n').map((foodItems) =>
    foodItems
      .split('\n')
      .map((item) => parseInt(item, 10))
      .reduce((a, b) => a + b)
  );

const findMostCaloriesCarried = (list) =>
  caloriesPerElf(list).reduce((a, b) => Math.max(a, b));

const totalCaloriesCarriedByTopThreeElves = (list) =>
  caloriesPerElf(list)
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a + b);

module.exports = {
  findMostCaloriesCarried,
  totalCaloriesCarriedByTopThreeElves,
};
