const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const charArray = new Array(26).fill(0);

const [_, ...names] = input;

const answer = [];

names.map((item) => {
  const charCode = item[0].charCodeAt();
  charArray[charCode - 97]++;
});

charArray.map((char, i) => {
  if (char >= 5) {
    answer.push(String.fromCharCode(i + 97));
  }
});

if (answer.length === 0) {
  console.log("PREDAJA");
} else {
  console.log(answer.join(""));
}
