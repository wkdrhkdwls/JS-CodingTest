const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (
      input.reduce((sum, item) => sum + item, 0) ===
      input[i] + input[j] + 100
    ) {
      arr = input.filter((item) => item !== input[i] && item !== input[j]);
      break;
    }
  }
  if (!!arr) break;
}
arr.sort((a, b) => a - b);
for (let i = 0; i < 7; i++) console.log(arr[i]);
