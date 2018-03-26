const express = require('express');
const queryString = require('./libs/my-body-parser');

let server = express();
server.listen(8888);

server.use(queryString);

server.use('/', function (req, res) {
  console.log(req.body);//post请求的数据
});