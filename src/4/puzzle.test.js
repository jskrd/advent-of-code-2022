const CampCleanup = require('./puzzle');

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const campCleanup = new CampCleanup(input);

test('answer for part 1 is 2', () => {
  expect(campCleanup.part1).toStrictEqual(2);
});

test('answer for part 2 is 4', () => {
  expect(campCleanup.part2).toStrictEqual(4);
});
