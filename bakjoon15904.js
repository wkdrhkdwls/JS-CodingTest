const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const n = ["U", "C", "P", "C"];
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === n[count]) {
    count++;
  } else if (count === 4) {
    break;
  }
}

if (count === 4) {
  console.log("I love UCPC");
} else {
  console.log("I hate UCPC");
}
