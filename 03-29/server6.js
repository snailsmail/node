const jade = require('jade');

console.log(jade.renderFile('./views/9.jade', {pretty: true,
  arr: ['234124', 'ewrgfsdg', '43rewff']
}));