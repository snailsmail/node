const express = require('express');
const expressStatic = require('express-static');

let server = express();
server.listen(8888);

server.use(expressStatic('./www'));