const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(input[0]);
let count = 0;

function divisor(e) {
  if (e === 1 || e === 3) {
    return -1;
  }
  while (e > 0) {
    if (e % 2 === 1 || e % 5 === 0) {
      count++;
      e -= 5;
    } else if (e % 2 === 0) {
      count++;
      e -= 2;
    }
  }
  return count;
}
console.log(divisor(num));
