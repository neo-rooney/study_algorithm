const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, pattern, ...fileNames] = input;

const [start, end] = pattern.split("*");

fileNames.map((name) => {
  const startLength = start.length;
  const endLength = end.length;

  if (name.length < startLength + endLength) {
    console.log("NE");
  } else if (
    start === name.slice(0, startLength) &&
    end === name.slice(name.length - endLength)
  ) {
    console.log("DA");
  } else {
    console.log("NE");
  }
});
