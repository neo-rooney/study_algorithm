const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let flag = false;
let count = 0;

while (a <= b) {
  if (a === b) {
    flag = true;
    break;
  } else if (b % 2 === 0) {
    b = parseInt(b / 2);
  } else if (b % 10 === 1) {
    b = parseInt(b / 10);
  } else {
    break;
  }
  count++;
}

if (!flag) console.log(-1);
else console.log(count + 1);
