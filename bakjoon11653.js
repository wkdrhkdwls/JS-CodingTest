const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);

const primeFactors = (n) => {
  const answer = [];
  while (n % 2 === 0) {
    answer.push(2);
    n /= 2;
  }

  for (let i = 3; i * i <= N; i += 2) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }

  if (n > 2) {
    answer.push(n);
  }
  return answer;
};

console.log(primeFactors(N).join("\n"));
