const http = require('http');
const urlLib = require('03-22/GET/url');

let server = http.createServer(function (req, res) {
  var obj = urlLib.parse(req.url, true);

  let url = obj.pathname;
  let GET = obj.query;

  console.log(url, GET);

  res.write('aaa');
  res.end();
});

server.listen(8888);