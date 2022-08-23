const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr.sort((a, b) => b - a);
let sum = 0;
for (let i = 1; i <= n; i++) {
  let tip = arr[i - 1] - (i - 1);

  if (tip > 0) {
    sum += tip;
  }
}
console.log(sum);
