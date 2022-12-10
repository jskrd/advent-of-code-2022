const fs = require('node:fs');
const {
  findMostCaloriesCarried,
  totalCaloriesCarriedByTopThreeElves,
} = require('./day-1/calorie-counting');

const dayOneList = fs.readFileSync('src/day-1/list.txt', 'UTF-8');

const answers = {
  'Day 1: Calorie Counting': {
    'Part One': findMostCaloriesCarried(dayOneList),
    'Part Two': totalCaloriesCarriedByTopThreeElves(dayOneList),
  },
};

process.stdout.write(`${JSON.stringify(answers, null, 2)}\n`);
