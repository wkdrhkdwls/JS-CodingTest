const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const maxi = Math.max(...input);
const locate = input.indexOf(maxi);
console.log(maxi);
console.log(locate + 1);
