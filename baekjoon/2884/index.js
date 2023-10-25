const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const temp = input[0].split(" ");
let H = Number(temp[0]);
let M = Number(temp[1]);
const minusMinute = 45;

if (M < minusMinute) {
  H -= 1;
  M += 15;
  if (H < 0) H = 23;
} else M -= 45;

console.log(H + " " + M);
