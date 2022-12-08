const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

const N = input.shift();
input.sort((a, b) => a - b);
const average = Math.round(input.reduce((a, c) => (a += c), 0) / N);

function median(data) {
  let n = 0;
  data = data.sort((a, b) => a - b);
  n = Math.floor(data.length / 2);
  return (data[n] + data[data.length - 1 - n]) / 2;
}

function getMode(n) {
  const counts = n.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  const keys = Object.keys(counts);
  let mode = keys[0];
  keys.forEach((val, idx) => {
    if (counts[val] > counts[mode]) {
      mode = val;
    }
  });

  return mode;
}
const result = _.chain(input).countBy().pairs().max(_.last).head().value();
console.log(result);
