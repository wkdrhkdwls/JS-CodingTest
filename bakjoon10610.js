const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let temp = input.split("").map((e) => parseInt(e)); // 1 0 2
let sumInput = temp.reduce((e, v) => e + v); //3
temp.sort((a, b) => b - a);

if (!input.split("").includes("0")) {
  console.log(-1);
} else {
  if (sumInput % 3 === 0) {
    console.log(temp.join(""));
  } else {
    console.log(-1);
  }
}
