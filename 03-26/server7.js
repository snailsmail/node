const express = require('express');
const queryString2 = require('./libs/my-body-parser3');

let server = express();
server.listen(8888);

server.use(queryString2.aaa());

server.use('/', function (req, res) {
  console.log(req.body);//post请求的数据
});