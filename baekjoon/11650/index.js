const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let arr = [];

for (i = 1; i < input.length; i++) {
  const item = input[i].split(" ").map(Number);
  arr.push(item);
}

const compareFunc = (a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
};

arr = arr.sort(compareFunc);

let answer = "";

for (i = 0; i < arr.length; i++) {
  answer += arr[i][0] + " " + arr[i][1] + "\n";
}
console.log(answer);
