const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

let count = 0;

for (let i = 1; i <= N; i++) {
  const num1 = Math.floor((i % 1000) / 100);
  const num2 = Math.floor((i % 100) / 10);
  const num3 = i % 10;
  if (i < 100) {
    count++;
  } else if (100 <= i && i < 1000) {
    if (num1 - num2 === num2 - num3) {
      count++;
    }
  }
}
console.log(count);
