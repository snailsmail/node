const express = require('express');
const expressStatic = require('express-static');
const urlLib = require('url');

let datas = [{"id": 1, "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", "good": 2, "bad": 1, "date": 1520996956259},{"id": 2, "content": "内容内容内容容内容内容内容内容内容", "good": 6, "bad": 3, "date": 1520956956259}];
let perPage = 5;

let server = express();
server.listen(8888);

server.use('/getList', function (req, res) {
  let obj = urlLib.parse(req.url, true);
  console.log(obj.query);
  let resDatas = datas.slice((parseInt(obj.query.current, 10)-1)*perPage, perPage);

  console.log(resDatas);
  res.send(resDatas);
  res.end();
});


server.use('/add', function (req, res) {
  let obj = urlLib.parse(req.url, true);
  let data = {};

  console.log(obj.query);

  data['id'] = datas.length +1;
  data['content'] = obj.query.content;
  data['good'] = 0;
  data['bad'] = 0;
  data['date'] = new Date().getTime();
  datas.unshift(data);

  res.write('{"ok": true}');
  res.end();
});

server.use(expressStatic('./www'));



