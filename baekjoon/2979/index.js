const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const parkingFees = input[0].split(" ").map(Number);
const truckAParingTime = input[1].split(" ").map(Number);
const truckBParingTime = input[2].split(" ").map(Number);
const truckCParingTime = input[3].split(" ").map(Number);

const timeSection = new Array(100).fill(0);

for (let i = truckAParingTime[0]; i < truckAParingTime[1]; i++) {
  timeSection[i] += 1;
}

for (let i = truckBParingTime[0]; i < truckBParingTime[1]; i++) {
  timeSection[i] += 1;
}

for (let i = truckCParingTime[0]; i < truckCParingTime[1]; i++) {
  timeSection[i] += 1;
}

let sum = 0;

timeSection.map((item) => {
  if (item === 1) {
    sum += parkingFees[0];
  } else if (item === 2) {
    sum += parkingFees[1] * 2;
  } else if (item === 3) {
    sum += parkingFees[2] * 3;
  }
});

console.log(sum);
