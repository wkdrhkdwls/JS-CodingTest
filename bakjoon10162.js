const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim();

const A = 300;
const B = 60;
const C = 10;

let answer = "";
let change = input;

answer += `${parseInt(change / A)}`;
change = change % A;

answer += `${parseInt(change / B)}`;
change = change % B;

answer += `${parseInt(change / C)}`;
change = change % C;

answer = change !== 0 ? -1 : answer;

console.log(answer);
