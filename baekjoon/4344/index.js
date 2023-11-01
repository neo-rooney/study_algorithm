const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const c = Number(input[0]);

let result = "";

for (let i = 1; i <= c; i++) {
  const testCase = input[i].split(" ").map((item) => Number(item));
  const [n, ...score] = testCase;
  const average = score.reduce((acc, cur) => acc + cur) / n;
  const overAverageStudents = score.filter((item) => item > average).length;
  const overAverageStudentsRatio = (
    Math.round((overAverageStudents / n) * 100 * 1000) / 1000
  ).toFixed(3);
  result += `${overAverageStudentsRatio}%\n`;
}
console.log(result);
