const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

const sortedList = input.sort((a, b) => a - b);
let answer = "";
for (i = 0; i < sortedList.length; i++) {
  answer += sortedList[i] + " ";
}
console.log(answer);
