const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = Number(input[0]);
const b_100 = Number(input[1][0]);
const b_10 = Number(input[1][1]);
const b_1 = Number(input[1][2]);

const answer_3 = a * b_1;
const answer_4 = a * b_10;
const answer_5 = a * b_100;
const answer_6 = answer_5 * 100 + answer_4 * 10 + answer_3;

console.log(answer_3);
console.log(answer_4);
console.log(answer_5);
console.log(answer_6);
