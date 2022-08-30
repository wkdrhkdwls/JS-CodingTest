const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let number = input[i].split(" ");
  console.log(`Case #${i}: ${Number(number[0]) + Number(number[1])}`);
}
