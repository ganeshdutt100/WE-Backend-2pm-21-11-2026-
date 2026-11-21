const fs = require("fs");
// fs.writeFile("code1.txt", "hello from code1", (err) => {
//   if (err) {
//     console.error("file write Error", err);
//     return;
//   }
//   console.log("file written successfully");
// });

fs.readFile("code1.txt", "utf8", (err, data) => {
  if (err) {
    console.error("File read error ", err);
    return;
  }
  console.log("File Data  : ", data);
});
