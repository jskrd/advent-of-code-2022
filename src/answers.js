const fs = require('node:fs');
const {
  findMostCaloriesCarried,
  totalCaloriesCarriedByTopThreeElves,
} = require('./day-1/calorie-counting');

const caloriesList = fs.readFileSync('src/day-1/input.txt', 'UTF-8');

const answers = {
  'Day 1: Calorie Counting': {
    'Part One': findMostCaloriesCarried(caloriesList),
    'Part Two': totalCaloriesCarriedByTopThreeElves(caloriesList),
  },
};

process.stdout.write(`${JSON.stringify(answers, null, 2)}\n`);
