const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const k = +input.shift();
  const n = +input.shift();
  const arr1 = Array.from(Array(k + 1), () => Array(n + 1).fill(0)); //arr[2][4] + arr[4][4]

  for (let i = 0; i <= n; i++) {
    arr1[0][i] = i + 1;
  }
  for (let i = 1; i <= k; i++) {
    arr1[i][0] = 1;
  }
  let answer = 0;
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      arr1[i][j] = arr1[i - 1][j] + arr1[i][j - 1];
    }
  }
  console.log(arr1[k][n - 1]);
}
