const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let Narr = [];
for (let i = 0; i < input.length; i++) {
  Narr.push(input.charAt(i));
}

const result = {};
Narr.forEach((x) => {
  result[x] = (result[x] || 0) + 1;
});
let maxi = Math.max(...result);
console.log(maxi);
