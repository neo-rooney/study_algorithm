const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const data = input[1].split(" ").map(Number);

const prefixSum = [0];

for (let i = 1; i <= n; i++) {
  prefixSum[i] = prefixSum[i - 1] + data[i - 1];
}

let max = Number.MIN_SAFE_INTEGER;

for (let i = k; i <= n; i++) {
  max = Math.max(max, prefixSum[i] - prefixSum[i - k]);
}

console.log(max);
