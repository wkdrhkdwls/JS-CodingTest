const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s+/)
  .map((num) => parseInt(num));

const isPrime = (e) => {
  const prime = {};

  for (let i = 2; i <= Math.ceil(Math.sqrt(e)); i++) {
    if (prime[e]) {
      break;
    }

    if (prime[i]) {
      continue;
    }

    for (let j = i ** 2; j <= e; j += i) {
      prime[j] = true;
    }
  }
  if (e === 1) {
    return false;
  }
  return !prime[e];
};

let count = 0;
for (let i = 0; i < n; i++) {
  if (isPrime(arr[i]) === true) {
    count += 1;
  }
}
console.log(count);
