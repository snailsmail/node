const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8888);

server.use(cookieParser());

//cookie
server.use('/', function (req, res) {
  res.cookie('name', 'cyz');

  res.clearCookie('name');
  res.send('ok');
});