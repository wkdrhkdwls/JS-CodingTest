const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const FirstInput = input[0].split(" ").map(Number);
const SecondInput = input[1].split(" ").map(Number);

let Narr = [];
for (let i = 0; i < FirstInput[0]; i++) {
  if (SecondInput[i] < FirstInput[1]) {
    Narr.push(SecondInput[i]);
  }
}

console.log(Narr.join(" "));
