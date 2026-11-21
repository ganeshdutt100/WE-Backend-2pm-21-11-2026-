const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Home `);
  }
  if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`About `);
  }

  if (req.url == "/project") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Project `);
  }

  if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Contact `);
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
