const fs = require('node:fs');
const CalorieCounting = require('./1/puzzle');
const RockPaperScissors = require('./2/puzzle');
const RucksackReorganization = require('./3/puzzle');
const CampCleanup = require('./4/puzzle');
const SupplyStacks = require('./5/puzzle');
const TuningTrouble = require('./6/puzzle');

const getInput = (day) => fs.readFileSync(`src/${day}/input.txt`, 'UTF-8');

const calorieCounting = new CalorieCounting(getInput('1'));
const rockPaperScissors = new RockPaperScissors(getInput('2'));
const rucksackReorganization = new RucksackReorganization(getInput('3'));
const campCleanup = new CampCleanup(getInput('4'));
const supplyStacks = new SupplyStacks(getInput('5'));
const tuningTrouble = new TuningTrouble(getInput('6'));

const answers = {
  'Day 1: Calorie Counting': {
    'Part One': calorieCounting.part1,
    'Part Two': calorieCounting.part2,
  },
  'Day 2: Rock Paper Scissors': {
    'Part One': rockPaperScissors.part1,
    'Part Two': rockPaperScissors.part2,
  },
  'Day 3: Rucksack Reorganization': {
    'Part One': rucksackReorganization.part1,
    'Part Two': rucksackReorganization.part2,
  },
  'Day 4: Camp Cleanup': {
    'Part One': campCleanup.part1,
    'Part Two': campCleanup.part2,
  },
  'Day 5: Supply Stacks': {
    'Part One': supplyStacks.part1,
    'Part Two': supplyStacks.part2,
  },
  'Day 6: Tuning Trouble': {
    'Part One': tuningTrouble.part1,
    'Part Two': tuningTrouble.part2,
  },
};

process.stdout.write(`${JSON.stringify(answers, null, 2)}\n`);
