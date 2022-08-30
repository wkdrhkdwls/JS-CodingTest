const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = input[0];
const B = input[1];
const C = input[2];

if (A === B && A === C && B === C) {
  console.log(10000 + A * 1000);
}

if (A !== B || A !== C || B !== C) {
  if (A === B || A === C) {
    console.log(1000 + A * 100);
  }
  if (B === C) {
    console.log(1000 + B * 100);
  }
}

if (A !== B && A !== C && B !== C) {
  const sort = input.sort((a, b) => a - b);
  console.log(sort.pop() * 100);
}
