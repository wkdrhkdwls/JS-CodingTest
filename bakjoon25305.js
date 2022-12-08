const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const first = input[0].split(" ");
const second = input[1].split(" ");

const N = Number(first[0]);
const k = Number(first[1]);

second.sort((a, b) => b - a);
console.log(second[k - 1]);
