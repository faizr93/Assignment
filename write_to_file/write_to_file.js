const fs = require("fs");
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter Number: ", (num) => {
  fs.appendFile(
    "c:/Users/Faiz/Documents/VsCode_Projects/Assignment/write_to_file/my-file.txt",
    num,
    (err) => {
      if (err) throw err;
      console.log(`${num} was appended to file!`);
      r1.close();
    }
  );
});

