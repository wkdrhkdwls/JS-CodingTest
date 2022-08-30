const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
let n = Number(input);
if (n <= 100 && n >= 90) {
  console.log("A");
} else if (n >= 80 && n <= 89) {
  console.log("B");
} else if (n >= 70 && n <= 79) {
  console.log("C");
} else if (n >= 60 && n <= 69) {
  console.log("D");
} else {
  console.log("F");
}
