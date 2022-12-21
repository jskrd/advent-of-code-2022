const SupplyStacks = require('./puzzle');

const input =
  '    [D]    \n' +
  '[N] [C]    \n' +
  '[Z] [M] [P]\n' +
  ' 1   2   3 \n' +
  '\n' +
  'move 1 from 2 to 1\n' +
  'move 3 from 1 to 3\n' +
  'move 2 from 2 to 1\n' +
  'move 1 from 1 to 2';

const supplyStacks = new SupplyStacks(input);

test('answer for part 1 is CMZ', () => {
  expect(supplyStacks.part1).toStrictEqual('CMZ');
});

test('answer for part 2 is MCD', () => {
  expect(supplyStacks.part2).toStrictEqual('MCD');
});

test('parsed stacks of crates', () => {
  expect(SupplyStacks.parseStacks(input.split('\n\n')[0])).toStrictEqual([
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P'],
  ]);
});

test('parsed rearrangement procedures', () => {
  expect(SupplyStacks.parseProcedures(input.split('\n\n')[1])).toStrictEqual([
    { move: 1, from: 2, to: 1 },
    { move: 3, from: 1, to: 3 },
    { move: 2, from: 2, to: 1 },
    { move: 1, from: 1, to: 2 },
  ]);
});

const rearrangeCratesOneAtATimeDataSet = [
  [
    [
      [['Z', 'N'], ['M', 'C', 'D'], ['P']],
      {
        move: 1,
        from: 2,
        to: 1,
      },
    ],
    [['Z', 'N', 'D'], ['M', 'C'], ['P']],
  ],
  [
    [
      [['Z', 'N', 'D'], ['M', 'C'], ['P']],
      {
        move: 3,
        from: 1,
        to: 3,
      },
    ],
    [[], ['M', 'C'], ['P', 'D', 'N', 'Z']],
  ],
  [
    [
      [[], ['M', 'C'], ['P', 'D', 'N', 'Z']],
      {
        move: 2,
        from: 2,
        to: 1,
      },
    ],
    [['C', 'M'], [], ['P', 'D', 'N', 'Z']],
  ],
  [
    [
      [['C', 'M'], [], ['P', 'D', 'N', 'Z']],
      {
        move: 1,
        from: 1,
        to: 2,
      },
    ],
    [['C'], ['M'], ['P', 'D', 'N', 'Z']],
  ],
];
rearrangeCratesOneAtATimeDataSet.forEach(([params, expected], index) => {
  test(`rearrange crates one at a time #${index}`, () => {
    expect(SupplyStacks.rearrangeCratesOneAtATime(...params)).toStrictEqual(
      expected
    );
  });
});

const rearrangeCratesMultipleAtATimeDataSet = [
  [
    [
      [['Z', 'N'], ['M', 'C', 'D'], ['P']],
      {
        move: 1,
        from: 2,
        to: 1,
      },
    ],
    [['Z', 'N', 'D'], ['M', 'C'], ['P']],
  ],
  [
    [
      [['Z', 'N', 'D'], ['M', 'C'], ['P']],
      {
        move: 3,
        from: 1,
        to: 3,
      },
    ],
    [[], ['M', 'C'], ['P', 'Z', 'N', 'D']],
  ],
  [
    [
      [[], ['M', 'C'], ['P', 'Z', 'N', 'D']],
      {
        move: 2,
        from: 2,
        to: 1,
      },
    ],
    [['M', 'C'], [], ['P', 'Z', 'N', 'D']],
  ],
  [
    [
      [['M', 'C'], [], ['P', 'Z', 'N', 'D']],
      {
        move: 1,
        from: 1,
        to: 2,
      },
    ],
    [['M'], ['C'], ['P', 'Z', 'N', 'D']],
  ],
];
rearrangeCratesMultipleAtATimeDataSet.forEach(([params, expected], index) => {
  test(`rearrange crates multiple at a time #${index}`, () => {
    expect(
      SupplyStacks.rearrangeCratesMultipleAtATime(...params)
    ).toStrictEqual(expected);
  });
});

const readCrateAtTopOfEachStackDataSet = [
  [[['Z', 'N'], ['M', 'C', 'D'], ['P']], 'NDP'],
  [[['Z', 'N', 'D'], ['M', 'C'], ['P']], 'DCP'],
  [[[], ['M', 'C'], ['P', 'D', 'N', 'Z']], ' CZ'],
  [[['C', 'M'], [], ['P', 'D', 'N', 'Z']], 'M Z'],
  [[['Z', 'N'], ['M', 'C', 'D'], ['P']], 'NDP'],
  [[['Z', 'N', 'D'], ['M', 'C'], ['P']], 'DCP'],
  [[[], ['M', 'C'], ['P', 'Z', 'N', 'D']], ' CD'],
  [[['M', 'C'], [], ['P', 'Z', 'N', 'D']], 'C D'],
];
readCrateAtTopOfEachStackDataSet.forEach(([stacks, message], index) => {
  test(`read crate at top of each stack #${index}`, () => {
    expect(SupplyStacks.readCrateAtTopOfEachStack(stacks)).toStrictEqual(
      message
    );
  });
});
