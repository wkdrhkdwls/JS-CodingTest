const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const first = parseInt(input[0]);
const second = parseInt(input[1]);
let arr = [];

for (let i = 1; i <= first; i++) {
  if (first % i === 0) {
    arr.push(i);
  }
}

if (arr.length >= second) {
  console.log(arr[second - 1]);
} else {
  console.log(0);
}
