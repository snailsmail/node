const jade = require('jade');

console.log(jade.renderFile('./views/8.jade', {pretty: true, a: 5, b: 7}));