const { log } = require("console");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("end of server code");
});
server.listen(port, hostname, () => {
  console.log(`server is listening at ${port}`);
});
