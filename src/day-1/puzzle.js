class CalorieCounting {
  constructor(input) {
    this.caloriesPerElf = input.split('\n\n').map((foodItems) =>
      foodItems
        .split('\n')
        .map((item) => parseInt(item, 10))
        .reduce((a, b) => a + b)
    );
  }

  get answer1() {
    return this.caloriesPerElf.reduce((a, b) => Math.max(a, b));
  }

  get answer2() {
    return this.caloriesPerElf
      .sort((a, b) => a - b)
      .slice(-3)
      .reduce((a, b) => a + b);
  }
}

module.exports = CalorieCounting;
