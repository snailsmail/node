const express = require('express');

let server = express();
server.listen(8888);

server.use('/', function (req, res) {
  console.log(req.query);//get请求的数据
});