const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const H = input[0];
const M = input[1];

if (M < 45) {
  if (H === 0) {
    console.log(`23 ${60 + M - 45}`);
  } else {
    console.log(`${H - 1} ${60 + M - 45}`);
  }
} else {
  console.log(`${H} ${M - 45}`);
}
