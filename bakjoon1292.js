const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number(e));

let arr = [0];
let num = 1;
let count = 0;
while (arr.length <= input[1]) {
  arr.push(num);
  count++;
  if (count === num) {
    num++;
    count = 0;
  }
}
const answer = arr
  .slice(input[0], input[1] + 1)
  .reduce((past, curr) => past + curr, 0);
console.log(answer);
