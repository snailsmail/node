const express = require('express');
const queryString = require('querystring');

let server = express();
server.listen(8888);

server.use(function (req, res, next) {

  var str = '';
  req.on('data', function (data) {
    str += data;
  });

  req.on('end', function () {
    req.body = queryString.parse(str);

    next();
  });

});

server.use('/', function (req, res) {
  console.log(req.body);//post请求的数据
});