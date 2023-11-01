const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const testCase = input.map(Number);

let max = -101;
let max_index = 0;
for (let i = 0; i < testCase.length; i++) {
  if (testCase[i] > max) {
    max = testCase[i];
    max_index = i;
  }
}

const result = `${max}\n${max_index + 1}`;

console.log(result);
