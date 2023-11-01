const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const testCase = input.splice(1);

let result = "";

testCase.map((item) => {
  const data = item.split(" ");
  const a = Number(data[0]);
  const b = data[1];

  result += a + b + "\n";
});

console.log(result);
