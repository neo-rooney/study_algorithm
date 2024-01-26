const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

const length = input.length;

const loopNumber = parseInt(length / 2) - 1;

let isPalindrome = 1;

for (let i = 0; i <= loopNumber; i++) {
  if (input[i] !== input[input.length - 1 - i]) {
    isPalindrome = 0;
    break;
  }
}

console.log(isPalindrome);
