const num1 = parseInt(require("fs").readFileSync("input.txt").toString());

let sum = 0;
let count = 0;
for (let i = 1; ; i++) {
  sum += i;
  count++;
  if (sum > num1) {
    count--;
    break;
  }
}

console.log(count);
