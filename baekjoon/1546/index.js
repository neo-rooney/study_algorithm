const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const score = input[1].split(" ").map((item) => Number(item));

const max = Math.max(...score);

const newScore = score.map((item) => (item * 100) / max);

const average = newScore.reduce((acc, curr) => acc + curr) / n;
console.log(average);
