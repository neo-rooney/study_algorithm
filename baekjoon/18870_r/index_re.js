const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const x_arr = input[1].split(" ").map(Number);

// 중복 제거
let testCase = [...new Set(x_arr)];

// 오름차순 정렬
testCase.sort((a, b) => a - b);

// 인덱스와 요소 맵핑
const obj = {};
for (let i = 0; i < testCase.length; i++) {
  obj[testCase[i]] = i;
}

let answer = "";
for (let item of x_arr) {
  answer += obj[item] + " ";
}
console.log(answer);
