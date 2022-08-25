const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num1 = input[0];
const num2 = input[1];

for (let i = 2; i >= 0; i--) {
  for (let j = 0; j < 3; j++) {
    console.log(num1 * input[1][i]);
    break;
  }
}
console.log(num1 * num2);
