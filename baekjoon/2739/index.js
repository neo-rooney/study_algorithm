const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);

for (i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
