const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const testCase = input[1].split(" ").map((item) => Number(item));

const max = Math.max(...testCase);
const min = Math.min(...testCase);
console.log(`${min} ${max}`);
