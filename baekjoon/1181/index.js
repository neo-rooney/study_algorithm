const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...arr] = input;

const compareFunc = (a, b) => {
  if (a.length != b.length) {
    return a.length - b.length;
  } else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
};

const sortedArr = [...new Set(arr)].sort(compareFunc);

for (let x of sortedArr) {
  console.log(x);
}
