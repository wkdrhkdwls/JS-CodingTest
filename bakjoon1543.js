const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [one, two] = fs.readFileSync(filePath).toString().trim().split("\n");

let index = 0;
let count = 0;
while (index < one.length) {
  const Nindex = one.slice(index).search(two);
  if (Nindex >= 0) {
    count++;
    index += Nindex + two.length;
  } else {
    break;
  }
}
console.log(count);
