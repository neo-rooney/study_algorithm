const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);

arr = arr.sort((a, b) => a - b);

let durationArr = [];

for (i = 0; i < arr.length; i++) {
  let duration = 0;
  for (j = 0; j <= i; j++) {
    duration += arr[j];
  }
  durationArr.push(duration);
}

const answer = durationArr.reduce((acc, curr) => acc + curr);
console.log(answer);
