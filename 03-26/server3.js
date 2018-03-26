const express = require('express');
const bodyParser = require('body-parser');

let server = express();
server.listen(8888);

server.use(bodyParser.urlencoded({}));

server.use('/', function (req, res) {
  console.log(req.body);//post请求的数据
});