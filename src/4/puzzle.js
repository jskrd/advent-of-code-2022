class CampCleanup {
  constructor(input) {
    this.pairs = input
      .split('\n')
      .map((pair) =>
        pair
          .split(',')
          .map((range) => range.split('-').map((value) => Number(value)))
      );
  }

  get part1() {
    return this.pairs.filter(
      (pair) =>
        (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
        (pair[1][0] >= pair[0][0] && pair[1][1] <= pair[0][1])
    ).length;
  }

  get part2() {
    return this.pairs.filter(
      (pair) =>
        (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][0]) ||
        (pair[0][0] <= pair[1][1] && pair[0][1] >= pair[1][1]) ||
        (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][0]) ||
        (pair[1][0] <= pair[0][1] && pair[1][1] >= pair[0][1])
    ).length;
  }
}

module.exports = CampCleanup;
