const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
function change(n) {
  n = n.replace(/XXXX/g, "AAAA");
  n = n.replace(/XX/g, "BB");

  return n.split("").includes("X") ? -1 : n;
}

console.log(change(n));
