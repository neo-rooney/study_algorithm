const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const values = input.splice(1, input.length).map(Number);

let answer = 0;
let rest = K;

for (let i = values.length; i >= 0; i--) {
  if (values[i] <= rest) {
    answer += parseInt(rest / values[i]);
    rest = rest % values[i];
  }
}

console.log(answer);
