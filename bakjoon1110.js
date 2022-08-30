const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let NumberInput = Number(input);
let N = Number(input);
let sum;
let count = 0;

while (true) {
  count++;

  sum = Math.floor(N / 10) + (N % 10);
  N = (N % 10) * 10 + (sum % 10);

  if (NumberInput === N) {
    break;
  }
}

console.log(count);
