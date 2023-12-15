const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const height_arr = input[1].split(" ").map(Number);

let start = 0;
let end = height_arr.reduce((a, b) => Math.max(a, b));

let answer;
while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let sum = 0;
  for (item of height_arr) {
    sum += Math.max(item - mid, 0);
  }

  if (sum < M) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);
