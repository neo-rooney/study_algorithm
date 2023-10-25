const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let H = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);
const D = Number(input[1]);
let totalMinute = H * 60 + M + D;
totalMinute %= 1440;

H = parseInt(totalMinute / 60);
M = totalMinute % 60;

console.log(H + " " + M);
