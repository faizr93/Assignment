const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter Number: ", (num) => {
    console.log(`${num}`);
    r1.close();
})
