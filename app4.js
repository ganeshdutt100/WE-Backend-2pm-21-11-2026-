const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Home `);
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`About `);
  } else if (req.url == "/project") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Project `);
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Contact `);
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`404 page not found `);
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
