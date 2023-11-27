const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, ...arr] = input;

const sorted = arr.map(Number).sort((a, b) => a - b);
const answer = sorted.reduce((acc, curr) => acc + curr + "\n", "");

console.log(answer);
