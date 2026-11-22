const http = require("http");
const PORT = 5000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Node.js .</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis eaque animi voluptates quae nemo fuga nam, esse ipsa placeat repellat ut illum facere consequuntur officiis praesentium, quidem eligendi et.</p>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
