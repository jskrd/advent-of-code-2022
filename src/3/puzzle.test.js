const RucksackReorganization = require('./puzzle');

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const rucksackReorganization = new RucksackReorganization(input);

test('answer for part 1 is 157', () => {
  expect(rucksackReorganization.part1).toStrictEqual(157);
});

test('answer for part 2 is 70', () => {
  expect(rucksackReorganization.part2).toStrictEqual(70);
});
