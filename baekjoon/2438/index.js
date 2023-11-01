const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);

let result = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
