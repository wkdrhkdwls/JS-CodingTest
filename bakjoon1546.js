const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map((num) => parseInt(num));

const maxi = Math.max(...arr);
let Narr = [];
for (let i = 0; i < arr.length; i++) {
  Narr.push((arr[i] * 100) / maxi);
}
const answer = Narr.reduce((a, b) => a + b);
const average = answer / Narr.length;
console.log(average);
