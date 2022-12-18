class RockPaperScissors {
  constructor(input) {
    this.rounds = input.split('\n').map((round) => round.split(' '));

    this.opponentShapes = { A: 'rock', B: 'paper', C: 'scissors' };
    this.yourShapes = { X: 'rock', Y: 'paper', Z: 'scissors' };
    this.yourOutcomes = { X: 'lose', Y: 'draw', Z: 'win' };
  }

  get answer1() {
    return this.rounds
      .map((round) => [
        this.opponentShapes[round[0]],
        this.yourShapes[round[1]],
      ])
      .map((round) => this.constructor.concludeRound(round[0], round[1]))
      .reduce((a, b) => a + b);
  }

  get answer2() {
    return this.rounds
      .map((round) => [
        this.opponentShapes[round[0]],
        this.yourOutcomes[round[1]],
      ])
      .map((round) => {
        const shapeToChoose = {
          rock: { lose: 'scissors', draw: 'rock', win: 'paper' },
          paper: { lose: 'rock', draw: 'paper', win: 'scissors' },
          scissors: { lose: 'paper', draw: 'scissors', win: 'rock' },
        };

        return this.constructor.concludeRound(
          round[0],
          shapeToChoose[round[0]][round[1]]
        );
      })
      .reduce((a, b) => a + b);
  }

  static concludeRound(opponent, you) {
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
  }
}

module.exports = RockPaperScissors;
