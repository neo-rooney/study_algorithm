const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = input.map(Number);

const rest_arr = testCase.map((item) => item % 42);

const rest_set = new Set(rest_arr);

console.log(rest_set.size);
