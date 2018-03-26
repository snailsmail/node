const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

let datas = [];
let perPage = 5;

let server = http.createServer(function (req, res) {

  var str = '';
  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {

    let obj = urlLib.parse(req.url, true);

    const url = obj.pathname;
    const GET = obj.query;
    const POST = querystring.parse(str);

    if (url == '/getList') {//get方法请求
      let resDatas = datas.splice((GET.current-1)*perPage, perPage);
      let json = JSON.parse(`{"ok": true, "data":${resDatas.length == 0 ? null : resDatas}}`);
      console.log(json.toString());
      res.write(json);
      res.end();
    } else if (url == '/add') { //post方法请求
      var data = {};
      data['id'] = datas.length +1;
      data['content'] = POST.content;
      data['good'] = 0;
      data['bad'] = 0;
      data['date'] = new Date().getTime();
      datas.unshift(data);
      res.write('{"ok": true}');
      res.end();
    } else if (url == '/update') { //post方法请求
      for (let i = 0; i < datas.length; i++) {

        if (POST.id == datas[i].id) {
          datas[i].content = POST.content;
        }
      }
      res.write('{"ok": true}');
      res.end();
    } else if (url == '/delete') { //post方法请求
      for (let i = 0; i < datas.length; i++) {

        if (POST.id == datas[i].id) {
          datas.splice(i, 1);
        }
      }

      //index-id=-1
      for (let i = 0; i < datas.length; i++) {
        datas[i].id = i + 1;
      }
      res.write('{"ok": true}');
      res.end();
    } else {
      //读取文件
      let file_name = './www' + url;
      fs.readFile(file_name, function (err, data) {
        if (err) {
          res.write("404");
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  })

});

server.listen(8888);