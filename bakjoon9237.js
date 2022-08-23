const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map((num) => parseInt(num));

let tree = [];
let answer = 0;
arr.sort((a, b) => {
  return b - a;
});

for (let i = 0; i < n; i++) {
  tree.push(arr[i] + i + 2);
}

console.log(Math.max.apply(Math, tree));
