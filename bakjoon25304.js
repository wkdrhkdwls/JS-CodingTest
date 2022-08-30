const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let Narr = [];
for (let i = 2; i <= input.length - 1; i++) {
  let number = input[i].split(" ");
  Narr.push(Number(number[0]) * Number(number[1]));
}

const answer = Narr.reduce((a, b) => a + b);
if (answer === Number(input[0])) {
  console.log("Yes");
} else {
  console.log("No");
}
