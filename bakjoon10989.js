const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

const N = input.shift();

input.sort((a, b) => a - b);

console.log(input.join("\n"));
//JS로 못푼다고함 ㅠㅠ 메모리부족
