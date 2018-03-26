const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8888);

server.use(cookieParser());

//cookie
server.use('/aaa', function (req, res) {
  console.log(req.cookies);
  res.send('ok');
});