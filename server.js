const http = require('http');

const requestListener = function (req, res) {
    console.log(req.method)
    console.log(req.url);
  res.writeHead(200);
 // res.writeHead("ContentType", "application/json");
  res.end(`[
    {id:1,brand:"Mercedes",price:3500},
    {id:2,brand:"BMW",price:3500}
]`)
  
}

const server = http.createServer(requestListener);
server.listen(8080);