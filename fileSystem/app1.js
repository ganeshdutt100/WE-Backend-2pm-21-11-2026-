const fs = require("fs");
//
// try {
//   const data = fs.readFileSync("code1.txt", "utf8");
//   console.log("Data : ", data);
// } catch (err) {
//   console.log(err);
// }

try {
  fs.writeFileSync("code1.txt", "Sync Data ");
  console.log("file written successfully ");
} catch (err) {
  console.log(err);
}
// fs.writeFile("code1.txt", "second class", (err) => {
//   if (err) {
//     console.error("file write Error", err);
//     return;
//   }
//   console.log("file written successfully");
// });
// fs.readFile("code1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("File read error ", err);
//     return;
//   }
//   console.log("File Data  : ", data);
// });
