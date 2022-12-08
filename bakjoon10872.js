const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
let answer = 1;
for (let i = 1; i <= N; i++) {
  answer *= i;
}
if (N === 0) {
  console.log(1);
} else {
  console.log(answer);
}
