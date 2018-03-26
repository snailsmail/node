const express = require('express');

let server = express();
server.listen(8888);

//cookie
server.use('/', function (req, res) {
  res.cookie('user', 'yzsb', {path: '/aaa', maxAge: 30*24*3600*1000});
  res.send('ok');
});