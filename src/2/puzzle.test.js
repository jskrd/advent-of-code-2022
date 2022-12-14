const RockPaperScissors = require('./puzzle');

const input = `A Y
B X
C Z`;

const rockPaperScissors = new RockPaperScissors(input);

test('answer for part 1 is 15', () => {
  expect(rockPaperScissors.part1).toStrictEqual(15);
});

test('answer for part 2 is 12', () => {
  expect(rockPaperScissors.part2).toStrictEqual(12);
});
