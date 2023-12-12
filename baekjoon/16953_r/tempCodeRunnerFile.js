const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);

let count = 0;
while (b > a) {
  if (b % 10 === 1) {
    b = parseInt(b / 10);
    count++;
  } else if (b % 2 === 0) {
    b = parseInt(b / 2);
    count++;
  } else {
    break;
  }
}

if (b === a) console.log(count + 1);
else console.log(-1);
