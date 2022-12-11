const {
  totalScoreWithWhatYouShouldPlay,
  totalScoreWithHowRoundNeedsToEnd,
} = require('./rock-paper-scissors');

const strategyGuide = `A Y
B X
C Z`;

test('total score with what you should play is 15', () => {
  expect(totalScoreWithWhatYouShouldPlay(strategyGuide)).toStrictEqual(15);
});

test('total score with how round needs to end is 12', () => {
  expect(totalScoreWithHowRoundNeedsToEnd(strategyGuide)).toStrictEqual(12);
});
