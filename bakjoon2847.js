const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

let count = 0;
for (let i = 1; i < N; i++) {
  if (arr[i] <= arr[i - 1]) {
    count += arr[i - 1] - arr[i] + 1;
    arr[i] = arr[i - 1] + 1;
  }
}
console.log(count);
