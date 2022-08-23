const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map((num) => parseInt(num));

let count = 0;
let milk = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] === milk) {
    milk++;
    count++;
    if (milk > 2) {
      milk = 0;
    }
  }
}

console.log(count);
