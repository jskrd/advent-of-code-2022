const CalorieCounting = require('./puzzle');

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const calorieCounting = new CalorieCounting(input);

test('answer for part 1 is 24000', () => {
  expect(calorieCounting.answer1).toStrictEqual(24000);
});

test('answer for part 2 is 45000', () => {
  expect(calorieCounting.answer2).toStrictEqual(45000);
});
