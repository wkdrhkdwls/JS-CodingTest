const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

for (let i = 0; i < input; i += 1) {
  let result = "";

  for (let j = 0; j < input; j += 1) {
    if (j < input - (i + 1)) {
      result += " ";
    } else {
      result += "*";
    }
  }

  console.log(result);
}
