var http = require("http");
// var fs = require("fs");

http
  .createServer(function(req, res) {
    console.log(process.env.MESSAGE);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${process.env.MESSAGE}</h1>`);
  })
  .listen(3000);
