const fs = require('node:fs');
const {
  findMostCaloriesCarried,
  totalCaloriesCarriedByTopThreeElves,
} = require('./day-1/calorie-counting');
const {
  totalScoreWithWhatYouShouldPlay,
  totalScoreWithHowRoundNeedsToEnd,
} = require('./day-2/rock-paper-scissors');

const caloriesList = fs.readFileSync('src/day-1/input.txt', 'UTF-8');
const strategyGuide = fs.readFileSync('src/day-2/input.txt', 'UTF-8');

const answers = {
  'Day 1: Calorie Counting': {
    'Part One': findMostCaloriesCarried(caloriesList),
    'Part Two': totalCaloriesCarriedByTopThreeElves(caloriesList),
  },
  'Day 2: Rock Paper Scissors': {
    'Part One': totalScoreWithWhatYouShouldPlay(strategyGuide),
    'Part Two': totalScoreWithHowRoundNeedsToEnd(strategyGuide),
  },
};

process.stdout.write(`${JSON.stringify(answers, null, 2)}\n`);
