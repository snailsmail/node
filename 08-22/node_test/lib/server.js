let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');
let c = require('child_process');

let server = http.createServer(function (req, res) {
  // 获取根目录
  let root = path.resolve('.');
  // 获取请求路径
  let filePath = url.parse(req.url).pathname;
  if (filePath === '/') filePath = '/index.html';
  // 生成文件路径
  let absPath = path.join(root, '/public', filePath);

  debugger
  // 从硬盘读取文件
  fs.readFile(absPath, function (err, data) {
    if (err) {
      // 重写响应头，返回 404
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write("not found");
    } else{
      // 重写响应头，返回 200
      res.writeHead(200, {'Content-Type': 'text/html'});
      // 响应文件内容
      res.write(data);
    }
    //  结束响应，发送数据
    res.end();
  });
});

server.listen(4567, function () {
  console.log('server listening on port 4567');

  c.exec('start http://localhost:4567');
});