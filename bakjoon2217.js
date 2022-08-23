const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
input.shift();
const lope = input.map((i) => Number(i));

let Narr = [];

function solution(n, lope) {
  const sortLope = lope.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    Narr.push(sortLope[i] * (n - i));
  }
  return Math.max(...Narr);
}

console.log(solution(n, lope));
