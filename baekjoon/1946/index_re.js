const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCaseLength = Number(input[0]);
let currentTestCaseLengthIndex = 1;

let answer = "";
for (let tc = 0; tc < testCaseLength; tc++) {
  const currentTestCaseLength = Number(input[currentTestCaseLengthIndex]);

  let testCase = input.slice(
    currentTestCaseLengthIndex + 1,
    currentTestCaseLengthIndex + 1 + currentTestCaseLength
  );

  testCase = testCase
    .map((item) => item.split(" ").map(Number))
    .sort((a, b) => {
      return a[1] - b[1];
    });

  let count = 1;
  let documentLank = testCase[0][0];
  for (let i = 1; i < currentTestCaseLength; i++) {
    if (testCase[i][0] < documentLank) {
      documentLank = testCase[i][0];
      count++;
    }
  }
  currentTestCaseLengthIndex += currentTestCaseLength + 1;
  answer += count + "\n";
}

console.log(answer);
