const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const num1 = input[0];
const num2 = input[1];
let Narr = [];
let sum = 0;

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  if (n === 1) {
    return false;
  }
  return true;
}; //false : 소수아님

for (let i = num1; i <= num2; i++) {
  if (isPrime(i) === true) {
    Narr.push(i);
  }
}
for (let i = 0; i < Narr.length; i++) {
  sum += Narr[i];
}
const minValue = Math.min(...Narr);

if (Narr[0] > 0 || sum > 0) {
  console.log(sum);
  console.log(minValue);
} else {
  console.log(-1);
}
