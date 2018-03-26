const express = require('express');

let server = express();

server.use('/a.html', function (req, res) {
  // res.write('aaa'); write与send一样
  res.send('aaa'); //send可以返回数组，json等，是增强了write
  res.end();
});

server.use('/b.html', function (req, res) {
  // res.write('bbb');
  res.send('bbb');
  res.end();
});

server.listen(8888);