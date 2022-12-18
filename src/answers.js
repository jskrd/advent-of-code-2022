const fs = require('node:fs');
const CalorieCounting = require('./day-1/puzzle');
const RockPaperScissors = require('./day-2/puzzle');

const getInput = (day) => fs.readFileSync(`src/day-${day}/input.txt`, 'UTF-8');

const calorieCounting = new CalorieCounting(getInput('1'));
const rockPaperScissors = new RockPaperScissors(getInput('2'));

const answers = {
  'Day 1: Calorie Counting': {
    'Part One': calorieCounting.answer1,
    'Part Two': calorieCounting.answer2,
  },
  'Day 2: Rock Paper Scissors': {
    'Part One': rockPaperScissors.answer1,
    'Part Two': rockPaperScissors.answer2,
  },
};

process.stdout.write(`${JSON.stringify(answers, null, 2)}\n`);
