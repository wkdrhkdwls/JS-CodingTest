const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

const N = input.shift();

const answer = [...new Set(input)];
answer.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  console.log(answer[i]);
}
