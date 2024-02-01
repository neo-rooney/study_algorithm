const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const data = input.slice(1, n + 1);
const map = new Map(data.map((item, i) => [item, i + 1]));

const questions = input
  .slice(n + 1)
  .map((item) => (isNaN(Number(item)) ? item : Number(item)));

let answer = "";

questions.map((item) => {
  if (typeof item === "number") {
    answer += data[item - 1] + "\n";
  } else {
    answer += map.get(item) + "\n";
  }
});

console.log(answer);
