const rounds = (strategyGuide, secondColumn) =>
  strategyGuide.split('\n').map((round) => {
    const [a, b] = round.split(' ');

    const firstColumn = { A: 'rock', B: 'paper', C: 'scissors' };

    return [firstColumn[a], secondColumn[b]];
  });

const calculateScore = (opponent, you) => {
  let score = 0;

  const scores = {
    rock: { rock: 3, paper: 6, scissors: 0 },
    paper: { rock: 0, paper: 3, scissors: 6 },
    scissors: { rock: 6, paper: 0, scissors: 3 },
  };
  score += scores[opponent][you];

  const scoresForChosenShape = { rock: 1, paper: 2, scissors: 3 };
  score += scoresForChosenShape[you];

  return score;
};

const totalScoreWithWhatYouShouldPlay = (strategyGuide) =>
  rounds(strategyGuide, { X: 'rock', Y: 'paper', Z: 'scissors' })
    .map((round) => {
      const [opponent, you] = round;

      return calculateScore(opponent, you);
    })
    .reduce((a, b) => a + b);

const totalScoreWithHowRoundNeedsToEnd = (strategyGuide) =>
  rounds(strategyGuide, { X: 'lose', Y: 'draw', Z: 'win' })
    .map((round) => {
      const [opponent, outcome] = round;

      const shapesToChoose = {
        rock: { lose: 'scissors', draw: 'rock', win: 'paper' },
        paper: { lose: 'rock', draw: 'paper', win: 'scissors' },
        scissors: { lose: 'paper', draw: 'scissors', win: 'rock' },
      };
      const you = shapesToChoose[opponent][outcome];

      return calculateScore(opponent, you);
    })
    .reduce((a, b) => a + b);

module.exports = {
  totalScoreWithWhatYouShouldPlay,
  totalScoreWithHowRoundNeedsToEnd,
};
