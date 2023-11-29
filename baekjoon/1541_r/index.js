const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const group = input[0].split("-");

let answer = 0;
for (i = 0; i < group.length; i++) {
  const group_item_sum = group[i]
    .split("+")
    .map(Number)
    .reduce((acc, curr) => acc + curr);

  if (i === 0) answer += group_item_sum;
  else answer -= group_item_sum;
}

console.log(answer);
