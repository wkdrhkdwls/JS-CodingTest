const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s+/);

const maxValue = Math.max(...arr);
const minValue = Math.min(...arr);
console.log(`${minValue} ${maxValue}`);
