const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  if (input.includes(0) && input.includes(1)) {
    let toOne = input.split(0).filter((e) => e !== "").length;
    let toZero = input.split(1).filter((e) => e !== "").length;
    return toOne < toZero ? toOne : toZero;
  } else return 0;
}
console.log(solution(input));
