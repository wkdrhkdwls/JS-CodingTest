const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map((num) => parseInt(num));

input.sort((a, b) => b - a);
console.log(input.join(""));
