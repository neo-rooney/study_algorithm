const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let i = parseInt(n / 5);

let answer = -1;
for (i; i >= 0; i--) {
  const rest = n - 5 * i;
  if (rest % 3 === 0) {
    answer = i + parseInt(rest / 3);
    break;
  }
}

console.log(answer);
