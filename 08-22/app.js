'use static'

let hello = require('./chenye-module/hello');
//require后接的是相对路径，若改为require('hello'),则会报错，提示说找不到对应模块
//这是因为在没有具体路径的时候，require会先检查node.js核心模块，比如‘fs’，‘http’，然后检查node_modules,
//最后检查环境变量NODE_PATH指定的目录
//若是新建一个node_modules文件夹，将hello.js移进去，用require('hello')，运行是正常的
hello('ye zi');