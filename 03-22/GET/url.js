const url = require('03-22/GET/url');

let obj = url.parse("http://www.dddd.com/index?a=12&b=5", true);
console.log(obj);
console.log(obj.pathname, obj.query);