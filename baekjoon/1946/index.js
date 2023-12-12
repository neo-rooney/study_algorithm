const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = Number(input[0]);
//input 배열에서 지원자 숫자가 위치하는 인덱스
let n_index = 1;

for (let tc = 0; tc < testCase; tc++) {
  const n = Number(input[n_index]);

  // 각 테스트 케이스의 성적 배열 추출 및 형 변환
  let scores = input
    .slice(n_index + 1, n_index + n + 1)
    .map((item) => item.split(" ").map(Number));
  // 성적 배열의 서류심사 성적에 따라 오름차순 정렬
  scores.sort((a, b) => a[0] - b[0]);

  // 선발 할 수 있는 신입 사원의 인원수
  let count = 0;
  // 성적 배열을 순환 할 때 기준이 될 면접 성적
  let minScore = Number.MAX_SAFE_INTEGER;

  for (i = 0; i < scores.length; i++) {
    if (scores[i][1] < minScore) {
      count++;
      minScore = scores[i][1];
    }
  }
  console.log(count);

  n_index += n + 1;
}
