const jade = require('jade');

console.log(jade.renderFile('./views/10.jade', {pretty: true,
  content: '<h2>你好啊</h2><p>ergewrghrth发vgjdfjifdfigbjwfdibfdjsgewrtbn</p>'
}));