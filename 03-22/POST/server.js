const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {

  var str = '';//接收数据

  var i = 0;
  //data---有一段数据到达，会有很多次
  req.on('data', function (data) {
    console.log(`第${i++}次接收到数据`);
    str += data;

  });

  //end---数据全部到达，只一次
  req.on('end', function () {
    //console.log(str);
    var POST = querystring.parse(str);
    console.log(POST);
  });

  res.write('POST');
  res.end();
}).listen(8888);