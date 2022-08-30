const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [1, 1, 2, 2, 2, 8];
let Narr = [];

for (let i = 0; i < arr.length; i++) {
  Narr.push(arr[i] - input[i]);
}

console.log(Narr.join(" "));
