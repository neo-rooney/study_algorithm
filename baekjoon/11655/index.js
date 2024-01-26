const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n")[0];
// 공백을 받아야해서 trim()을 뺐어야했다(자동 완성을 너무 막 쓰지 말자!)
let answer = "";

input.split("").map((char) => {
  const charCode = char.charCodeAt();
  if (charCode >= 65 && charCode <= 90) {
    const convertedCharCode = charCode + 13;
    if (convertedCharCode <= 90) {
      answer += String.fromCharCode(convertedCharCode);
    } else {
      answer += String.fromCharCode(convertedCharCode - 90 - 1 + 65);
    }
  } else if (charCode >= 97 && charCode <= 122) {
    const convertedCharCode = charCode + 13;
    if (convertedCharCode <= 122) {
      answer += String.fromCharCode(convertedCharCode);
    } else {
      answer += String.fromCharCode(convertedCharCode - 122 - 1 + 97);
    }
  } else {
    answer += String.fromCharCode(charCode);
  }
});

console.log(answer);
