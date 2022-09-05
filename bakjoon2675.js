const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let answer = "";
for (let i = 1; i <= N; i++) {
  let num = Number(input[i].split(" ")[0]);
  let str = input[i].split(" ")[1];

  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < num; k++) {
      answer += str[j];
    }
  }
  answer += "\n";
}

console.log(answer);
