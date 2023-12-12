const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let p = input[1].split(" ").map(Number);

p.sort((a, b) => a - b);

let sum = 0;
let answer = 0;
for (let i = 0; i < p.length; i++) {
  sum += p[i];
  answer += sum;
}

console.log(answer);
