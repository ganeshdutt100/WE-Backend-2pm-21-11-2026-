// let a = "hello";
// let buf = Buffer.from(a);
// console.log(a);
// console.log(buf.toString());
// console.log(buf.length);

const fs = require("fs");

const readStream = fs.createReadStream("streamExample.txt");
const writeStream = fs.createWriteStream("copyData.txt");
readStream.pipe(writeStream);

// const readStream = fs.createReadStream("streamExample.txt", {
//   encoding: "utf8",
//   size: 64 * 1024, //chunk size  =  64kb
// });
//
// readStream.on("data", (chunk) => {
//   console.log("new chunks : ", chunk);
//   console.log(" chunks length : ", chunk.length);
// });
//
// readStream.on("end", () => {
//   console.log("File reading finished");
// });
//
// readStream.on("err", (err) => {
//   console.log("error  ", err);
// });

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
