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
    // 시간초과를 해결하기 위해서 break 추가
    // 위 두조건을 만족하지 못하면 어짜피 못만드는 것이므로 반복문을 끝낸다
    break;
  }
}

if (b === a) console.log(count + 1);
else console.log(-1);
