const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const FirstLine = input[0].split(" ").map(Number);
const Plus = Number(input[1]);

const H = FirstLine[0];
const M = FirstLine[1];

let num1 = Math.floor((M + Plus) / 60);
let num2 = (M + Plus) % 60;

if (H + num1 >= 24) {
  console.log(`${H + num1 - 24} ${num2}`);
} else {
  console.log(`${H + num1} ${num2}`);
}
