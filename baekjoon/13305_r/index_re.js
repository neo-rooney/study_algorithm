const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const oilFees = input[2].split(" ").map(Number);
const distance = input[1].split(" ").map(Number);

let minOilFee = 1000000001;
let sum = BigInt(0);

for (let i = 0; i < oilFees.length; i++) {
  if (!distance[i]) break;
  if (oilFees[i] < minOilFee) {
    minOilFee = oilFees[i];
  }
  sum += BigInt(minOilFee) * BigInt(distance[i]);
}

console.log(String(sum));
