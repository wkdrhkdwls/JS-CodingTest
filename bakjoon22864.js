const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));

const A = input[0];
const B = input[1];
const C = input[2];
const M = input[3];

let count = 0;
let p = 0;
let answer = 0;
while (count !== 24) {
  if (p + A <= M) {
    answer += B;
    p += A;
  } else {
    p = p - C < 0 ? 0 : p - C;
  }
  count++;
}

console.log(answer);
