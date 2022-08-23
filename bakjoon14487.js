const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map((num) => parseInt(num));

const maxValue = Math.max(...arr);
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i];
}
let result = sum - maxValue;

console.log(result);
