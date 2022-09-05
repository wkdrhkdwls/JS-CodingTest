const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let Narr = [];
for (let i = 0; i < input.length; i++) {
  Narr.push(input[i] % 42);
}
const answer = new Set(Narr).size;
console.log(answer);
