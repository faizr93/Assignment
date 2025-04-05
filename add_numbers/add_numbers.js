const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter Number1: ", (num) => {
  r1.question("Enter Number2: ", (num2) => {
    console.log(Number(num) + Number(num2));
    r1.close();
  });
});
