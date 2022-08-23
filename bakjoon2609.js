const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const num1 = input[0];
const num2 = input[1];

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    return gcd(num2, num1 % num2);
  }
}
console.log(gcd(num1, num2));
console.log((num1 * num2) / gcd(num1, num2));
