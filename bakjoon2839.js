const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);

let count = 0;
while (true) {
  if (N % 5 === 0) {
    let five = Math.floor(N / 5);
    console.log(count + five);
    break;
  }
  if (N < 0) {
    console.log(-1);
    break;
  }
  count++;
  N -= 3;
}
