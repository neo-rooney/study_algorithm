const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0].split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a * b);
