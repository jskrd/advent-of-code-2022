class SupplyStacks {
  constructor(input) {
    const [stacks, procedures] = input.split('\n\n');

    this.stacks = SupplyStacks.parseStacks(stacks);
    this.procedures = SupplyStacks.parseProcedures(procedures);
  }

  get part1() {
    let stacks = this.stacks.map((inner) => inner.slice());

    this.procedures.forEach((procedure) => {
      stacks = SupplyStacks.rearrangeCratesOneAtATime(stacks, procedure);
    });

    return SupplyStacks.readCrateAtTopOfEachStack(stacks);
  }

  get part2() {
    let stacks = this.stacks.map((inner) => inner.slice());

    this.procedures.forEach((procedure) => {
      stacks = SupplyStacks.rearrangeCratesMultipleAtATime(stacks, procedure);
    });

    return SupplyStacks.readCrateAtTopOfEachStack(stacks);
  }

  static parseStacks(text) {
    const rows = text.split('\n').map((row) => {
      const columns = [];

      const columnSize = 4;
      for (let i = 0; i < row.length; i += columnSize) {
        columns.push(row.slice(i, i + columnSize).replace(/[^A-Z]/g, ''));
      }

      return columns;
    });

    const stacks = rows.pop().map(() => []);

    rows.reverse().forEach((column) =>
      column.forEach((value, index) => {
        if (value !== '') {
          stacks[index].push(value);
        }
      })
    );

    return stacks;
  }

  static parseProcedures(text) {
    return text
      .split('\n')
      .map((procedure) =>
        procedure.match(/[0-9]+/g).map((value) => Number(value))
      )
      .map((procedure) => ({
        move: procedure[0],
        from: procedure[1],
        to: procedure[2],
      }));
  }

  static rearrangeCratesOneAtATime(stacks, procedure) {
    for (let n = 1; n <= procedure.move; n += 1) {
      stacks[procedure.from - 1]
        .splice(-1)
        .forEach((crate) => stacks[procedure.to - 1].push(crate));
    }

    return stacks;
  }

  static rearrangeCratesMultipleAtATime(stacks, procedure) {
    stacks[procedure.from - 1]
      .splice(0 - procedure.move)
      .forEach((crate) => stacks[procedure.to - 1].push(crate));

    return stacks;
  }

  static readCrateAtTopOfEachStack(stacks) {
    let message = '';
    stacks.forEach((stack) => {
      const topCrate = stack.slice(-1);
      message += topCrate.length !== 0 ? topCrate : ' ';
    });

    return message;
  }
}

module.exports = SupplyStacks;
