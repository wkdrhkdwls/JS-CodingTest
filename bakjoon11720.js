const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = input[1].split("");

let answer = num.reduce((a, b) => {
  return (a += b * 1);
}, 0);
console.log(answer);
