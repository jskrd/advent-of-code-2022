const {
  findMostCaloriesCarried,
  totalCaloriesCarriedByTopThreeElves,
} = require('./calorie-counting');

const list = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test('most calories carried is 24000', () => {
  expect(findMostCaloriesCarried(list)).toStrictEqual(24000);
});

test('sum of calories carried by top three elves is 45000', () => {
  expect(totalCaloriesCarriedByTopThreeElves(list)).toStrictEqual(45000);
});
