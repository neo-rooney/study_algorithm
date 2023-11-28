const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

//중복 제거 및 정렬
const convertedArr = [...new Set(arr)].sort((a, b) => a - b);

//크기 맵핑
let map = new Map();
for (let i = 0; i < convertedArr.length; i++) {
  map.set(convertedArr[i], i);
}

let answer = "";
for (x of arr) {
  answer += map.get(x) + " ";
}

console.log(answer);
