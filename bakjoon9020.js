const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

function solution(num) {
  if (num <= 1) {
    return false;
  }

  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }

  const sqrt = parseInt(Math.sqrt(num));

  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < n; i++) {
  let Narr = [];
  for (let j = 2; j < arr[i]; j++) {
    if (solution(j) === true) {
      Narr.push(j);
    }
  }
  let Narr_1 = [];
  for (k = 0; Narr[k] < arr[i] / 2 + 1; k++) {
    if (solution(arr[i] - Narr[k])) {
      Narr_1.push([Narr[k], arr[i] - Narr[k]]);
    }
  }
  let answer = Narr_1.pop();
  console.log(`${answer[0]} ${answer[1]}`);
}
