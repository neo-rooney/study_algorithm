const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let count = 0;
let isPossible = false;

while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    count += parseInt(n / 5);
    console.log(count);
    isPossible = true;
    break;
  }
  n -= 3;
  count++;
}

if (!isPossible) {
  console.log(-1);
}
