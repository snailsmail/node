
const http = require("http");

let server = http.createServer(function () {
  console.log('有人来了');
});

server.listen(7070);

