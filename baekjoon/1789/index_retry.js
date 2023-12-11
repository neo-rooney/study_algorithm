const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const s = Number(input[0]);
let sum = 0;
let i = 1;

while (true) {
  sum += i;
  if (sum <= s) {
    i++;
  } else {
    break;
  }
}
console.log(i - 1);
