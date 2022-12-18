class RucksackReorganization {
  constructor(input) {
    this.rucksacks = input.split('\n').map((rucksack) => rucksack.split(''));
  }

  get answer1() {
    return this.rucksacks
      .map((itemTypes) => [
        itemTypes.slice(0, itemTypes.length / 2),
        itemTypes.slice(itemTypes.length / 2),
      ])
      .map((compartments) =>
        compartments[0].find(
          (itemType) => compartments[1].indexOf(itemType) !== -1
        )
      )
      .map((itemType) => this.constructor.getPriority(itemType))
      .reduce((a, b) => a + b);
  }

  get answer2() {
    const groups = [];

    const groupSize = 3;
    for (let i = 0; i < this.rucksacks.length; i += groupSize) {
      groups.push(this.rucksacks.slice(i, i + groupSize));
    }

    return groups
      .map((rucksacks) =>
        rucksacks[0].find(
          (itemType) =>
            rucksacks[1].indexOf(itemType) !== -1 &&
            rucksacks[2].indexOf(itemType) !== -1
        )
      )
      .map((itemType) => this.constructor.getPriority(itemType))
      .reduce((a, b) => a + b);
  }

  static getPriority(itemType) {
    const index = itemType.charCodeAt(0);

    if (index >= 65 && index <= 90) {
      return index - 38;
    }

    if (index >= 97 && index <= 122) {
      return index - 96;
    }

    return 0;
  }
}

module.exports = RucksackReorganization;
