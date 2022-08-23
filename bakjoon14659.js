const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map((num) => parseInt(num));

let Narr = [];
let answer = 0;
for (let i = 0; i < n; i++) {
  let count = 0;
  for (let j = i + 1; j < n; j++) {
    if (arr[i] > arr[j]) {
      count++;
    } else {
      break;
    }
  }
  answer = Math.max(answer, count);
}
console.log(answer);
