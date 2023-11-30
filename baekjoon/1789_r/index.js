const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const s = Number(input[0]);
let sum = 0;
let current = 0;

while (sum <= s) {
  current++;
  sum += current;
}

console.log(current - 1);
