const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const num1 = input[0];
const num2 = input[1];

function solution(num) {
  if (num <= 1) {
    return false;
  }

  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }

  const sqrt = parseInt(Math.sqrt(num));

  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
}

let Narr = [];
for (let i = num1; i <= num2; i++) {
  if (solution(i) === true) {
    Narr.push(i);
  }
}
for (let i = 0; i < Narr.length; i++) {
  console.log(Narr[i]);
}
