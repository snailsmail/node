const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

let users = {};

let server = http.createServer(function (req, res) {
  //解析数据
  var str = '';
  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {
    var obj = urlLib.parse(req.url, true);

    const url = obj.pathname;
    const GET = obj.query;
    const POST = querystring.parse(str);

    //区分接口、文件
    if (url == '/user') {

      switch (GET.act) {
        case 'reg':
          //1.检查用户名是否已经存在
          if (users[GET.user]) {
            res.write('{"ok": false, "msg": "此用户已经存在"}');
          } else {
            //2.插入users
            users[GET.user] = GET.pass;
            res.write('{"ok": true, "msg": "注册成功"}');
          }
          break;
        case 'login':
          //1.检查用户名是否存在
          if (users[GET.user] == null) {
            res.write('{"ok": false, "msg": "此用户不存在"}');
          } else if (users[GET.user] != GET.pass) {
            //2.检查用户密码
            res.write('{"ok": false, "msg": "用户名或密码有误"}');
          } else {
            res.write('{"ok": true, "msg": "登录成功"}');
          }
          break;
        default:
          res.write('{"ok": false, "msg": "未知的act"}');
      }
      res.end();
    } else {
      //读取文件
      let file_name = './www' + url;
      fs.readFile(file_name, function (err, data) {
        if (err) {
          res.write('404');
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  });
});

server.listen(8888);