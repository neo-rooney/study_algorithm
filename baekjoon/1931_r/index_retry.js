const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const times = input
  .slice(1, input.length)
  .map((item) => item.split(" ").map(Number));

times.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let current_meeting_end_time = times[0][1];
let count = 0;
for (let i = 1; i < times.length; i++) {
  const next_meeting_start_time = times[i][0];

  if (next_meeting_start_time >= current_meeting_end_time) {
    current_meeting_end_time = times[i][1];
    count++;
  }
}

console.log(count + 1);
