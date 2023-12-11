const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

const seperate_input_by_minus = input.split("-");
let answer = 0;
for (let i = 0; i < seperate_input_by_minus.length; i++) {
  const group_sum = seperate_input_by_minus[i]
    .split("+")
    .map(Number)
    .reduce((acc, curr) => acc + curr);
  if (i === 0) answer += group_sum;
  else answer -= group_sum;
}

console.log(answer);
