const jade = require('jade');

console.log(jade.renderFile('./views/4.jade', {pretty: true, name: 'cy', a: 5, b: 7}));