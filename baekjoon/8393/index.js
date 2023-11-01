const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const n = Number(input[0]);

let sum = 0;

for (i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);
