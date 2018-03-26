const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');

// let datas = [{"id": 1, "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", "good": 2, "bad": 1, "date": 1520996956259},{"id": 2, "content": "内容内容内容容内容内容内容内容内容", "good": 6, "bad": 3, "date": 1520956956259}];
let datas = [];
let perPage = 5;

let server = express();
server.use(bodyParser.urlencoded({ extend: false }));
server.listen(8888);

server.use('/getList', function (req, res) {

  // console.log(req.query);
  let resDatas = datas.slice((parseInt(req.query.current, 10)-1)*perPage, perPage);
  res.send(resDatas);
  res.end();
});


server.post('/add', function (req, res) {
  let data = {};

  // console.log(req.body);
  data['id'] = datas.length +1;
  data['content'] = req.body.content;
  data['good'] = 0;
  data['bad'] = 0;
  data['date'] = new Date().getTime();
  datas.unshift(data);

  res.write('{"ok": true}');
  res.end();
});

server.post('/delete', function (req, res) {

  for (let i = 0; i < datas.length; i++) {

    if (req.body.id == datas[i].id) {
      datas.splice(i, 1);
    }
  }

  //index-id=-1
  for (let i = 0; i < datas.length; i++) {
    datas[i].id = i + 1;
  }

  res.write('{"ok": true}');
  res.end();
});

server.post('/update', function (req, res) {

  for (let i = 0; i < datas.length; i++) {

    if (req.body.id == datas[i].id) {
      if (req.body.type == 'good') {
        datas[i].good++;
      } else if (req.body.type == 'bad') {
        datas[i].bad++;
      }
    }
  }

  res.write('{"ok": true}');
  res.end();
});

server.use(expressStatic('./www'));



