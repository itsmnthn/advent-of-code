import { readFileSync } from "fs";

const content = readFileSync("./input.txt", "utf-8");
const calories = content.split(/\r?\n/);

const elvWithCalories: Array<Array<string>> = [];

let currentElv: Array<string> = [];

calories.forEach((c) => {
  if (c) {
    currentElv.push(c);
  } else {
    elvWithCalories.push(currentElv);
    currentElv = [];
  }
});

console.log("Total elves", elvWithCalories.length);
const elvWithTotalCalories: Array<number> = [];
elvWithCalories.forEach((ec) => {
  elvWithTotalCalories.push(
    ec.reduce((total: number, n: string) => (total += Number(n)), 0)
  );
});
console.log("Elves with total calories: ", elvWithTotalCalories);

const elvWithMostCaloriesFirst = elvWithTotalCalories.sort((a, b) => b - a);
console.log("Elv with most calories", elvWithMostCaloriesFirst[0]);

let topThreeElvesTotalCalories = 0;

for (let i = 0; i < 3; i++) {
  topThreeElvesTotalCalories += elvWithMostCaloriesFirst[i];
}

console.log(
  "Total of top three elves carrying calories:",
  topThreeElvesTotalCalories
);
