const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

let alpabetSet = {};

for (let i = 97; i <= 122; i++) {
  alpabetSet = {
    ...alpabetSet,
    [i]: 0,
  };
}

for (let item of input) {
  const charCode = item.charCodeAt();
  alpabetSet = {
    ...alpabetSet,
    [charCode]: alpabetSet[charCode] + 1,
  };
}

const result = Object.values(alpabetSet).join(" ");

console.log(result);
