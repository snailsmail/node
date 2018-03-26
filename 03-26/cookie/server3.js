const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8888);

server.use(cookieParser('fwdgefgewr'));

//cookie
server.use('/', function (req, res) {
  req.secret = 'fwdgefgewr';
  res.cookie('name', 'cyz', {signed: true});
  console.log('无签名的cookie：', req.cookies);
  console.log('签名的cookie：',req.signedCookies);

  res.send('ok');
});