const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number(e));
const A = input[0];
const B = input[1];
const C = input[2];

let result = A / (C - B);

let answer = Math.floor(result) + 1;

console.log(C - B <= 0 ? -1 : answer);
