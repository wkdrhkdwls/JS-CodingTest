const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = 0;
let answer = 0;
let arr = [];

for (let i = 0; i < 10; i++) {
  const [before, next] = input[i].split(" ").map((e) => +e);
  num += next;
  num -= before;
  arr.push(num);
}
answer = Math.max(...arr);
console.log(answer);
