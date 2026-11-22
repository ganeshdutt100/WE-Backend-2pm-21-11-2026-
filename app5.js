// let a = "hello";
// let buf = Buffer.from(a);
// console.log(a);
// console.log(buf.toString());
// console.log(buf.length);

const fs = require("fs");

const readStrem = fs.createReadStream("streamExample.txt", "utf8");

readStrem.on("data", (chunk) => {
  console.log("new chunks : ", chunk);
});

readStrem.on("end", () => {
  console.log("File reading finished");
});

readStrem.on("err", (err) => {
  console.log("error  ", err);
});

// const writeStream = fs.createWriteStream("streamExample.txt");
//
// writeStream.write("Hello Node.js \n");
// writeStream.write("This is Node.js \n");
// writeStream.end();
//
// writeStream.on("finish", () => {
//   console.log("writting finished");
// });
//
// writeStream.on("error", (err) => {
//   console.log("error ", err);
// });
