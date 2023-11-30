const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let times = input
  .slice(1, input.length)
  .map((item) => item.split(" ").map(Number));

// 종료 시간을 기준으로 오름차순 정렬
// 만약 종료시간이 같다면, 시작 시간을 기준으로 정렬
times.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let count = 1;
let inProgressMeetingIndex = 0;

for (i = 1; i < times.length; i++) {
  if (times[inProgressMeetingIndex][1] <= times[i][0]) {
    inProgressMeetingIndex = i;
    count++;
  }
}
console.log(count);
