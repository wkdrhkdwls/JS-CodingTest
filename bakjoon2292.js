const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let count = 1;
let one = 1;
while (one < input) {
  one += 6 * count;
  count++;
}
console.log(count);
